const express = require('express')
const app = express()

app.use('/welcome', (req, res) => {
    res.status(200).send("Hello World")
})

module.exports = app
