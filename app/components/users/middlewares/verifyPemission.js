const jwt = require('jsonwebtoken')
const Rolpermission = require('../../rolpermission/rolpermissionModel')
const { token } = require('../../../constants/secretkey')
const { responseJson } = require('../../../constants/responseMessage')

const varifyPermission = (req, res, next) => {
  const path = req.path.split('/')
  let permitStatus = 'denied'
  // Recinbimos el token y se verifica
  jwt.verify(req.token, token.key , (err, userData) => {
    // Validando si el token esta autorizado
    if (err) return res.status(401).json({ message: 'Token no valido.', data: err })

    // Recibimos la solicitud
    const typePermission = path[1] === '' ? 'view' : path[1]
    const { user } = userData
    
    // Validamos el permiso del token del usuario
    Rolpermission.find({ rol: user.rol })
      .then(response => {
        for (const rolpermission of response) {
          if (rolpermission.permission === typePermission) {
            permitStatus = 'passed'
          }
        }

        if (permitStatus === 'passed') {

          next()
        } else {
          responseJson.status = 401
          responseJson.data = userData.user
          responseJson.message = 'El rol de este usuario no tiene permitido: ' + typePermission
          return res.status(401).json(responseJson)
        }
      })
      .catch(err => res.status(400).json(err))
  })
}

module.exports = varifyPermission
