const businessesController = require('../controllers/businesses_controller')
const express = require('express')
const router = express.Router()

module.exports = router

router.get('/seed', businessesController.seedBusinesses)
router.get('/', businessesController.index)
router.post('/', businessesController.create)
router.post('/:id', businessesController.edit)
router.post('/:id', businessesController.delete)
