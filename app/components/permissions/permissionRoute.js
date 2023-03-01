const express = require('express')
const router = express.Router()
// Requerir los metodos del controlador
const { getPermissions, getPermission, createPermission, updatePermission, deletePermission } = require('./permissionController')
// Requerir los middlewares
const { verifyToken } = require('../users/middlewares/verifyToken')
const verifyPemission = require('../users/middlewares/verifyPemission')
const dataValidation = require('../../middlewares/dataValidation')
const verifyRol = require('../rols/middlewares/verifyRol')

const middlewares = [verifyToken, verifyRol, verifyPemission, dataValidation]

router.get('/', middlewares, getPermissions)
router.get('/:id', middlewares, getPermission)
router.post('/create', middlewares, createPermission)
router.put('/update/:id', middlewares, updatePermission)
router.delete('/delete/:id', middlewares, deletePermission)

//test
router.post('/create-test',  createPermission)

module.exports = router
