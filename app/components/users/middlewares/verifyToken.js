
const verifyToken = (req, res, next) => {
  const authorizationHeader = req.headers.authorization
  if (authorizationHeader !== undefined) {
    const token = authorizationHeader.split(' ')[1]
    req.token = token
    console.log("Verifico el token")
    next()
  } else {
    return res.status(404).json({ message: 'No posee token de acceso', status: 404 })
  }
}

exports.verifyToken = verifyToken
