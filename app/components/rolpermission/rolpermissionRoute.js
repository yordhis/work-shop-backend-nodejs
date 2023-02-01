const express = require('express')
const router = express.Router()
// Requerir los metodos del controlador
const { getRolpermissions, getRolpermission, createRolpermission, updateRolpermission, deleteRolpermission } = require('./rolpermissionController')
// Requerir los middlewares
const { verifyToken } = require('../users/middlewares/verifyToken')
const verifyPemission = require('../users/middlewares/verifyPemission')
const dataValidation = require('../../middlewares/dataValidation')

const middlewares = [verifyToken, verifyPemission, dataValidation]

router.get('/', middlewares, getRolpermissions)
router.get('/:id', middlewares, getRolpermission)
router.post('/create', middlewares, createRolpermission)
router.put('/update/:id', middlewares, updateRolpermission)
router.delete('/delete/:id', middlewares, deleteRolpermission)

module.exports = router
