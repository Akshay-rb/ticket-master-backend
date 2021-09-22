const express = require('express')

const router = express.Router()

const customerController = require('../app/controller/customerController')

router.get('/',customerController.welcome)
router.get('/customers', customerController.list)
router.get('/customers/:id', customerController.show)
router.post('/customers',customerController.create)
router.put('/customers/:id',customerController.update)
router.delete('/customers/:id',customerController.destroy)

module.exports = router