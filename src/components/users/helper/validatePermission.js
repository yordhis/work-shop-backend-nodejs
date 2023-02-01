// eslint-disable-next-line no-unused-vars
const typePermission = require('../constants/typePermission')
const validatePermission = (data, permission) => {
  const user = data.user
  if (user.id_rol === undefined) return false

  let authorized = null
  switch (permission) {
    case 'query':{
      authorized = user.id_rol === 1 || user.id_rol === 2 ? 1 : 0
      break
    }

    default:{
      authorized = user.id_rol === 1 ? 1 : 0
      break
    }
  }
  return authorized
}

module.exports = validatePermission
