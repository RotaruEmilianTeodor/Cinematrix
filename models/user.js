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
    ratingValue: {
        type: Number,
        default: 0
    },
    resetToken: String,
    expireToken: Date
})

mongoose.model('User', userSchema)