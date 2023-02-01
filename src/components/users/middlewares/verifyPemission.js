const jwt = require('jsonwebtoken')
const validatePermission = require('../helper/validatePermission')

const varifyPermission = (req, res, next) => {
  const path = req.path.split('/')
  const responseJson = {
    status: 200,
    data: [],
    message: 'Ok'
  }

  jwt.verify(req.token, 'secret-key', (err, userData) => {
    if (err) return responseHelper(res, err, 401, 'Token no autorizado')

    // Validamos el rol del token o usuario
    const requiredType = path[1] === '' ? 'query' : path[1]
    if (!validatePermission(userData, requiredType)) {
      responseJson.status = 401
      responseJson.data = userData.user
      responseJson.message = 'El rol de este usuario no tiene permitido ejecutar el método ' + requiredType.toUpperCase()
      return res.status(401).json(responseJson)
    }

    next()
  })
}

module.exports = varifyPermission
