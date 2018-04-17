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

// const uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/HelloMongoose'

// // The http server will listen to an appropriate port, or default to
// // port 5000.
// const theport = process.env.PORT || 5000

// // Makes connection asynchronously.  Mongoose will queue up database
// // operations and release them when the connection is complete.
// mongoose.connect(uristring, function (err, res) {
//   if (err) {
//     console.log('ERROR connecting to: ' + uristring + '. ' + err)
//   } else {
//     console.log('Succeeded connected to: ' + uristring)
//   }
// })
require('dotenv').load()
const MONGODB = process.env.MONGODB_URI
console.log(MONGODB)
mongoose.Promise = global.Promise
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(MONGODB)
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'MongoDB connection error:'))
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
