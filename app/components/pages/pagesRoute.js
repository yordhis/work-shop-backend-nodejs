const express = require('express')
const { dashboard } = require('./pagesController')
const router = express.Router()

router.get('/dashboard', dashboard)

module.exports = router

