const express = require('express')
const mongoose = require('mongoose')
require('dotenv').load()
const app = express()

const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/alpha/businesses', require('./routes/routes'))

const MONGODB = process.env.MONGODB_URI
mongoose.connect(mongoDB)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app
  .use((error, request, response, next) => {
    response.status(422).send(error.message)
  })
  .use((request, response, next) => {
    response.status(404).send()
  })
  .use((error, request, response, next) => {
    response.status(500).send(error.message)
  })

module.exports = app
