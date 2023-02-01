const express = require('express')
const userRoute = require('../components/users/userRoute')
const rolRoute = require('../components/rols/rolRoute')
const permissionRoute = require('../components/permissions/permissionRoute')
const rolpermissionRoute = require('../components/rolpermission/rolpermissionRoute')
const router = express.Router()

router.use('/rols', rolRoute)
router.use('/users', userRoute)
router.use('/permissions', permissionRoute)
router.use('/rolpermissions', rolpermissionRoute)

module.exports = router
