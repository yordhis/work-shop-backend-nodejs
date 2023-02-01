const createError = require('http-errors')

const notFound = (req, res, next) => {
  const error = {
    path: req.path,
    method: req.method,
    msg: 'Ruta o método invalido'
  }
  next(createError(404, error))
}

const errorHandling = (err, req, res, next) => {
  const status = err.status === undefined ? 500 : err.status
  res.status(status)
  res.json(err)
}

module.exports = { notFound, errorHandling }
