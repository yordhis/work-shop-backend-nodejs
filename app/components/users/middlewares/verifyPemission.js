const jwt = require('jsonwebtoken')
const Rolpermission = require('../../rolpermission/rolpermissionModel')

const varifyPermission = (req, res, next) => {
  const path = req.path.split('/')
  let permitStatus = 'denied'
 
  // Recinbimos el token y se verifica
  jwt.verify(req.token, 'secret-key', (err, userData) => {
    // Validando si el token esta autorizado
    if (err) return responseHelper(res, err, 401, 'Token no autorizado')

    // Recibimos la solicitud
    const typePermission = path[1] === '' ? 'view' : path[1]
    const { user } = userData
    console.log(user)
    // Validamos el permiso del token del usuario
    Rolpermission.find({ rol: user.rol })
      .then(response => {
        for (const rolpermission of response) {
          if (rolpermission.permission === typePermission) {
            permitStatus = 'passed'
          }
        }

        if (permitStatus === 'passed') {
          console.log("Verifico permiso")
          next()
        } else {
          responseJson.status = 401
          responseJson.data = userData.user
          responseJson.message = 'El rol de este usuario no tiene permitido ejecutar el método ' + requiredType.toUpperCase()
          return res.status(401).json(responseJson)
        }
      })
      .catch(err => res.status(400).json(err))
  })
}

module.exports = varifyPermission
