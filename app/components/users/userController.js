
const User = require('./userModel')
const responseHelper = require('../../helpers/responseHelper')
const bcrypt = require('bcrypt')
const createHttpError = require('http-errors')
const jwt = require('jsonwebtoken')

const register = (req, res) => {
  const data = req.body
  data.rol = 'admin'
  data.password = bcrypt.hashSync(data.password, 10)
  const user = new User(data)
  user.save()
    .then(response => responseHelper(res, response, 201, 'El usuario se registro correctamente'))
    .catch(err => res.status(400).json(err))
}

const login = (req, res) => {
  const { email, password } = req.body

  User.findOne({ email })
    .then(responseLogin => {
      if (responseLogin) {
        const username = responseLogin.name === undefined ? responseLogin.email.split('@')[0] : responseLogin.name
        if (bcrypt.compareSync(password, responseLogin.password)) {
          jwt.sign({ user: responseLogin }, 'secret-key', (err, token) => {
            if (err === null) {
              responseHelper(res, token, 200, `Bienvenido a Cyber Stock ${username}`)
            }
          })
        } else {
          responseHelper(res, [], 401, 'Contraseña incorrecta')
        }
      } else {
        responseHelper(res, [], 401, 'E-mail incorrectos')
      }
    })
    .catch(err => createHttpError(404, err))
}

const getUser = (req, res) => {
  const { id } = req.params
  if (id !== '') {
    User.find({ _id: id })
      .then(response => {
        if (response === null) {
          responseHelper(res)
        }
        responseHelper(res, response)
      })
      .catch(err => res.status(404).json(err))
  }
}

const getUsers = (req, res) => {
  User.find()
    .then(response => responseHelper(res, response))
    .catch(err => res.status(400).json(err))
}

const createUser = (req, res) => {
  const data = req.body
  console.log(data)
  return
  data.password = bcrypt.hashSync(data.password, 10)
  const user = new User(data)
  user.save()
    .then(response => responseHelper(res, response, 201, 'El usuario se registro correctamente'))
    .catch(err => res.status(400).json(err))
}

const updateUser = (req, res) => {
  const { id } = req.params
  const data = req.body

  User.findById({ _id: id })
    .then(responseUser => {
      const newData = { ...data }
      User.findByIdAndUpdate(id, newData)
        .then(responseUp => {
          User.find(responseUp._id)
            .then(responseNewData => responseHelper(res, responseNewData, 200, 'El usuario se actualizó correctamente.'))
            .catch(err => res.status(404).json(err))
        })
        .catch(err => res.status(404).json(err))
    })
    .catch(err => res.status(404).json(err))
}

const deleteUser = (req, res) => {
  const { id } = req.params

  User.findById(id)
    .then(response => {
      // Validar que el usuario exista
      if (response === null) return responseHelper(res, response, 200, 'El usuario no existe')
      // Ejecutar la accion de eliminar
      User.findByIdAndDelete(id)
        .then(response => responseHelper(res, response, 200, 'El usuario se elimino correctamente'))
        .catch(err => res.status(400).json(err))
    })
    .catch(err => res.status(400).json(err))
}

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  register,
  login
}
