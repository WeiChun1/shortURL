const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const shortenURL = require('./modules/shortenURL')

router.use('/', home)
router.use('/', shortenURL)

module.exports = router