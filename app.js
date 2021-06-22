const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const {MONGOURI} = require('./config/keys')

require('./models/user')

app.use(express.json())
app.use(require('./routes/auth'))

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log('connected to mongo')
})
mongoose.connection.on('error', (err) => {
    console.log('error connecting', err)
})

if(process.env.NODE_ENV == 'production') {
    app.use(express.static('meniu/build'))
    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'meniu','build','index.html'))
    })
}

app.listen(PORT, ()=> {
    console.log('The server is running on', PORT);
})