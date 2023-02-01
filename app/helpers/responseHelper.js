const Response = require('express')
const responseMessage = require('../constants/responseMessage')

const responseHelper = (res = Response, data, status = 200, msg = undefined) => {
  const message = msg === undefined ? responseMessage[`${status}`] : msg
  const response = {
    data,
    status,
    message
  }
  res.status(status).json(response)
}

module.exports = responseHelper
