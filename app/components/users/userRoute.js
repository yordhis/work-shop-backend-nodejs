const express = require('express')
const dataValidation = require('../../middlewares/dataValidation')
const { verifyToken } = require('./middlewares/verifyToken')
const verifyRol = require('./middlewares/verifyRol')
const verifyPermission = require('./middlewares/verifyPemission')
const { getUser, getUsers, createUser, updateUser, deleteUser, register, login, signout } = require('./userController')
const router = express.Router()

const middlewares = [verifyToken, verifyRol, verifyPermission, dataValidation]

router.get('/', middlewares, getUsers)
router.get('/:id', middlewares, getUser)
router.post('/create', middlewares, createUser)
router.put('/update/:id', middlewares, updateUser)
router.delete('/delete/:id', middlewares, deleteUser)

router.post('/register', register)
router.post('/login', login)
router.delete('/signout', signout)

module.exports = router
