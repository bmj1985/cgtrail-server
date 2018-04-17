const mongoose = require('mongoose')

before((done) => {
  mongoose.connect('mongodb://localhost/businesses_test')
  mongoose.connection
    .once('open', () => { done() })
    .on('error', (error) => {
      console.warn('Warning', error)
    })
})

beforeEach((done) => {
  mongoose.connection.collections.businesses.drop(() => {
    done()
  })
})
