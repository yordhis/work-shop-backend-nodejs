const express = require('express')
const dataValidation = require('../../middlewares/dataValidation')
const { verifyToken } = require('./middlewares/verifyToken')
const verifyRol = require('./middlewares/verifyRol')
const { getUser, getUsers, createUser, updateUser, deleteUser, register, login, signout, getLogin } = require('./userController')
const router = express.Router()

const middlewares = [verifyToken, verifyRol, dataValidation]

// router.get('/',  getUsers)
// router.get('/:id',  getUser)
// router.post('/create',  createUser)
// router.put('/update/:id',  updateUser)
// router.delete('/delete/:id',  deleteUser)

// router.post('/register', register)
router.post('/login', login)
router.get('/login', getLogin)
// router.delete('/signout', signout)

module.exports = router
