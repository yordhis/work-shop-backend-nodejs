const express = require('express')
const router = express.Router()
// Requerir los metodos del controlador
const { getRols, getRol, createRol, updateRol, deleteRol } = require('./rolController')
// Requerir los middlewares
const { verifyToken } = require('../users/middlewares/verifyToken')
const dataValidation = require('../../middlewares/dataValidation')
const verifyRol = require('./middlewares/verifyRol')

const middlewares = [verifyToken, verifyRol, dataValidation]

router.get('/',  getRols)
router.get('/:id',  getRol)
router.post('/create',  createRol)
router.put('/update/:id',  updateRol)
router.delete('/delete/:id',  deleteRol)

//test
router.post('/create-test',  createRol)

module.exports = router
