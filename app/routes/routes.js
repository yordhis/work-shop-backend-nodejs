const express = require('express')
const userRoute = require('../components/users/userRoute')
const rolRoute = require('../components/rols/rolRoute')
const permissionRoute = require('../components/permissions/permissionRoute')
const rolpermissionRoute = require('../components/rolpermission/rolpermissionRoute')
const router = express.Router()

router.use('/admin/rols', rolRoute)
router.use('/admin/users', userRoute)
router.use('/admin/permissions', permissionRoute)
router.use('/admin/rolpermissions', rolpermissionRoute)

module.exports = router
