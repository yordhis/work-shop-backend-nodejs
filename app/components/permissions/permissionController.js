const responseHelper = require('../../helpers/responseHelper')
const Permission = require('./permissionModel')

const getPermissions = (req, res) => {
  Permission.find()
    .then(response => responseHelper(res, response))
    .catch(err => res.status(400).json(err))
}
const getPermission = (req, res) => {
  const { id } = req.params
  Permission.findById(id)
    .then(response => responseHelper(res, response))
    .catch(err => res.status(400).json(err))
}
const createPermission = (req, res) => {
  const data = req.body
  const permission = new Permission(data)
  permission.save()
    .then(response => responseHelper(res, response, 201, 'El Permiso se creó correctamente'))
    .catch(err => res.status(400).json(err))
}
const updatePermission = (req, res) => {
  const { id } = req.params
  const data = req.body

  Permission.findById({ _id: id })
    .then(responsePer => {
      const newData = { ...data }
      Permission.findByIdAndUpdate(id, newData)
        .then(responseUp => {
          Permission.find(responseUp._id)
            .then(responseNewData => responseHelper(res, responseNewData, 200, 'El Permiso se actualizó correctamente.'))
            .catch(err => res.status(404).json(err))
        })
        .catch(err => res.status(404).json(err))
    })
    .catch(err => res.status(404).json(err))
}
const deletePermission = (req, res) => {
  const { id } = req.params

  Permission.findById(id)
    .then(response => {
      // Validar que el rol exista
      if (response === null) return responseHelper(res, response, 200, 'El Permiso no existe')
      // Ejecutar la accion de eliminar
      Permission.findByIdAndDelete(id)
        .then(response => responseHelper(res, response, 200, 'El Permiso se eliminó correctamente'))
        .catch(err => res.status(400).json(err))
    })
    .catch(err => res.status(400).json(err))
}

module.exports = { getPermissions, getPermission, createPermission, updatePermission, deletePermission }
