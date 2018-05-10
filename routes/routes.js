const businessesController = require('../controllers/businesses_controller')
const express = require('express')
const router = express.Router()

module.exports = router

router.get('/seed', businessesController.seedBusinesses)
router.get('/', businessesController.list)
router.get('/:id', businessesController.read)
router.post('/', businessesController.create)
router.put('/:id', businessesController.edit)
router.post('/:id', businessesController.delete)

// app.post('/api/drivers', DriversController.create)
//     app.put('/api/drivers/:id', DriversController.edit)
//     app.delete('/api/drivers/:id', DriversController.delete)
//     app.get('/api/drivers', DriversController.index)
