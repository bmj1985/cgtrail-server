const express = require('express');

const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/businesses', require('./routes/businesses'));

app
  .use((request, response, next) => {
    response.status(404).send();
  })
  .use((error, request, response, next) => {
    response.status(500).send(error.message);
  });

module.exports = app;