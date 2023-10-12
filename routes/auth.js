const express = require('express')
const router = express.Router()
const { authorize } = require('../controllers/auth')

router.post('/', authorize)

module.exports = router
