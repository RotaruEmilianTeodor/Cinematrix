const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config/keys')
const requireLogin = require('../middleware/requireLogin')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const { SENDGRID_KEY } = require('../config/prod')

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: SENDGRID_KEY
    }
}))

router.get('/protected', requireLogin, (req, res) => {
    res.send('hello user')
})

router.post('/signup', (req, res) => {
    const {nume, email, parola} = req.body
    if (!nume || !email || !parola) {
        return res.status(422).json({error: 'Te rugam sa completezi toate casutele'})
    }
    User.findOne({email:email})
    .then((savedUser) => {
        if(savedUser) {
            return res.status(422).json({error: 'Deja exista un utilizator cu acest email'})
        }
        bcrypt.hash(parola, 12)
        .then(hashedparola => {
            const user = new User({
                email,
                parola: hashedparola,
                nume
            })
            user.save()
            .then(user => {
                transporter.sendMail({
                    to: user.email,
                    from: 'rotaruemilian18@stud.ase.ro',
                    subject: 'Inregistrare cont cu succes',
                    html: '<h1>Bine ai venit pe portalul Cinematrix</h1>'
                })
                res.json({message: 'saved successfully'})
            })
            .catch(err => {
                console.log(err);
            })
        })
    })
    .catch(err => {
        console.log();
    })
})

router.post('/signin', (req, res) => {
    const {email, parola} = req.body 
    if(!email || !parola) {
        return res.status(422).json({error: 'Va rugam sa introduceti emailul sau parola'})
    }
    User.findOne({email: email})
    .then(savedUser => {
        if(!savedUser){
            return res.status(422).json({error: 'Email sau parola incorecte'})
        }
        bcrypt.compare(parola, savedUser.parola)
        .then(doMatch => {
            if(doMatch){
                const token = jwt.sign({_id:savedUser._id}, JWT_SECRET)
                const {_id, nume, email, ratingValue, watchList, watched} = savedUser
                res.json({token, user: {_id, nume, email, ratingValue, watchList, watched}})
            }
            else {
                return res.status(422).json({error: 'Email sau parola incorecte'})
            }
        })
        .catch(err => {
            console.log(err);
        })
    })
})

router.post('/reset-password', (req, res) => {
    crypto.randomBytes(32, (err, buffer) => {
        if(err) {
            console.log(err);
        }
        const token = buffer.toString('hex')
        User.findOne({email: req.body.email})
        .then(user=>{
            if(!user){
                return res.status(422).json({err: 'Nu exista un utilizator cu acest email'})
            }
            user.resetToken = token
            user.expireToken = Date.now() + 3600000
            user.save().then((result) => {
                transporter.sendMail({
                    to: user.email,
                    from: 'rotaruemilian18@stud.ase.ro',
                    subject: 'Resetarea parolei',
                    html: `
                    <p>Ai cerut sa ti se reseteze parola</p>
                    <h4>Apasa <a href="http://localhost:3000/reset/${token}">aici</a> pentru a reseta parola</h4>
                    `
                })
                res.json({message: 'Verifica emailul'})
            }) 
        })
    })
})

router.post('/new-password', (req, res) => {
    const newPassword = req.body.parola
    const sentToken = req.body.token
    User.findOne({resetToken:sentToken, expireToken:{$gt:Date.now()}})
    .then(user => {
        if(!user) {
            return res.status(422).json({error: 'Sesiunea a expirat! Incearca din nou'})
        }
        bcrypt.hash(newPassword, 12).then(hashedparola => {
            user.parola = hashedparola
            user.resetToken = undefined
            user.expireToken = undefined
            user.save().then((savedUser) => {
                res.json({message: 'Parola a fost updatata'})
            })
        })
    }).catch(err=>{
        console.log(err)
    })
})

router.put('/updateRatingValue', requireLogin, (req, res) => {
    User.findByIdAndUpdate(req.user._id, { $set: { ratingValue: req.body.newRatingValue } }, { new: true },
        (err, result) => {
            if (err) {
                return res.status(422).json({ error: err })
            }
            res.json(result)
        })
})

module.exports = router

router.put('/add-watchList', requireLogin, (req, res) => {
    console.log(JSON.stringify(req.body.movie))
    User.findByIdAndUpdate(req.user._id, {$push: {watchList: JSON.stringify(req.body.movie)}}, { new: true },
        (err, result) => {
            if (err) {
                return res.status(422).json({ error: err })
            }
            res.json(result)
        })
})

router.put('/add-watched', requireLogin, (req, res) => {
    User.findByIdAndUpdate(req.user._id, {$push: {watched: JSON.stringify(req.body.movie)}}, { new: true },
        (err, result) => {
            if (err) {
                return res.status(422).json({ error: err })
            }
            res.json(result)
        })
})

router.get('/getWatchList',requireLogin,(req,res)=>{
    User.findOne({ _id: req.user._id})
        .select("_id watchList watched ")
        .then(data => {
            res.json({data})
        })
        .catch(err => console.log(err))
})

router.put('/deleteMovie',requireLogin,(req,res)=>{
    User.findByIdAndUpdate(req.user._id, {$pull: {watchList: JSON.stringify(req.body.movie)}}, { new: true },
        (err, result) => {
            if (err) {
                return res.status(422).json({ error: err })
            }
            res.json(result)
        })
})

router.put('/deleteMovie2',requireLogin,(req,res)=>{
    User.findByIdAndUpdate(req.user._id, {$pull: {watched: JSON.stringify(req.body.movie)}}, { new: true },
        (err, result) => {
            if (err) {
                return res.status(422).json({ error: err })
            }
            res.json(result)
        })
})

router.put('/fromWatchToWatched', requireLogin,(req,res) =>{
    User.findByIdAndUpdate(req.user._id, {$pull: {watchList: JSON.stringify(req.body.movie)}}, { new: true },
        (err, result) => {
            if (err) {
                return res.status(422).json({ error: err })
            }
            console.log(result)
        })
        .then(() =>{
            User.findByIdAndUpdate(req.user._id, {$push: {watched: JSON.stringify(req.body.movie)}}, { new: true },
            (err, result) => {
            if (err) {
                return res.status(422).json({ error: err })
            }
            res.json(result)
        })
        })
})

router.put('/fromWatchedToWatch',requireLogin,(req,res)=>{
    User.findByIdAndUpdate(req.user._id, {$pull: {watched: JSON.stringify(req.body.movie)}}, { new: true },
        (err, result) => {
            if (err) {
                return res.status(422).json({ error: err })
            }
        })
        .then(()=>{
            User.findByIdAndUpdate(req.user._id, {$push: {watchList: JSON.stringify(req.body.movie)}}, { new: true },
            (err, result) => {
            if (err) {
                return res.status(422).json({ error: err })
            }
            res.json(result)
        })
        })
})