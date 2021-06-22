const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nume: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    parola: {
        type: String,
        required: true
    },
    resetToken: String,
    expireToken: Date
})

mongoose.model('User', userSchema)