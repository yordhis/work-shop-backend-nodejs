const jwt = require('jsonwebtoken')
const { token } = require('../../../constants/secretkey')
const { responseJson } = require('../../../constants/responseMessage')

const verifyRol = (req, res, next ) => {
    jwt.verify(req.token, token.key , (err, userData) => {
        // Validando si el token esta autorizado
        if (err) return res.status(401).json({ message: 'Token no valido.', data: err })

    const { user } = userData

    switch (user.rol) {
        case "admin":
                next()
            break;
        case "supervisor":
                next()
            break;
    
        default:
            responseJson.status = 401
            responseJson.message = "El rol del usuario no tiene permitido ingresar a esta area del sistema."
            responseJson.data = user
            res.status(401).json(responseJson)
            break;
    }

    })
}

module.exports = verifyRol
