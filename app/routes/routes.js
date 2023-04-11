const express = require('express')
const userRoute = require('../components/users/userRoute')
const rolRoute = require('../components/rols/rolRoute')
const { getLogin } = require('../components/users/userController')
const pagesRoute = require('../components/pages/pagesRoute')
const router = express.Router()

router.get('/', getLogin)
router.use('/pages', pagesRoute)
router.use('/rols', rolRoute)
router.use('/users', userRoute)

module.exports = router
