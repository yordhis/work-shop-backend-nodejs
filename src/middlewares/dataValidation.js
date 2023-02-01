const responseHelper = require('../helpers/responseHelper')
const inputspanish = require('../constants/inputspanish')

const dataValidation = (req, res, next) => {
  // validar que el metodo sea diferente de get o delete
  if (req.method === 'GET' || req.method === 'DELETE') return next()

  const data = req.body
  const dataKeys = Object.keys(data)
  const dataValues = Object.values(data)
  const inputsNull = []

  for (let i = 0; i < dataKeys.length; i++) {
    // Capturando los campos vacios
    if (dataValues[i] !== '') continue
    const info = { [dataKeys[i]]: inputspanish.inputs[`${dataKeys[i]}`] + inputspanish.rule.required }
    inputsNull.push(info)
  }
  if (inputsNull.length > 0) return responseHelper(res, inputsNull, 400, 'Hay datos vacio o invalidos en el formalario')
  next()
}

module.exports = dataValidation
