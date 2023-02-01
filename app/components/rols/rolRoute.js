const express = require('express')
const router = express.Router()
// Requerir los metodos del controlador
const { getRols, getRol, createRol, updateRol, deleteRol } = require('./rolController')
// Requerir los middlewares
const { verifyToken } = require('../users/middlewares/verifyToken')
const verifyPemission = require('../users/middlewares/verifyPemission')
const dataValidation = require('../../middlewares/dataValidation')

const middlewares = [verifyToken, verifyPemission, dataValidation]

router.get('/', middlewares, getRols)
router.get('/:id', middlewares, getRol)
router.post('/create', middlewares, createRol)
router.put('/update/:id', middlewares, updateRol)
router.delete('/delete/:id', middlewares, deleteRol)

module.exports = router
