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

app.get('/api/alpha', (req, res) => {
  res.json({
    message: 'Welcome to the Crimson & Gold Trail API'
  })
})

app.use('/api/alpha/businesses', require('./routes/routes'))

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect(db, function (err) {
    db = 'mongodb://localhost/businesses'
    if (err) {
      console.log(err)
    } else {
      console.log('mongoose connection is successful on: ' + db)
    }
  })
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
