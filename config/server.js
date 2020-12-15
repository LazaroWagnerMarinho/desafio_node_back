//load our app server using express somehow
const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.set('views', './app/views')

module.exports = app;