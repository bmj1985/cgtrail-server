const express = require('express')
const mongoose = require('mongoose')

const app = express()

const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/alpha/businesses', require('./routes/routes'))

mongoose.Promise = global.Promise
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/businesses')
}

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
