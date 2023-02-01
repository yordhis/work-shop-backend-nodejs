const responseHelper = require('../../helpers/responseHelper')
const Rolpermission = require('./rolpermissionModel')

const getRolpermissions = (req, res) => {
  Rolpermission.find()
    .then(response => responseHelper(res, response))
    .catch(err => res.status(400).json(err))
}
const getRolpermission = (req, res) => {
  const { id } = req.params
  Rolpermission.findById(id)
    .then(response => responseHelper(res, response))
    .catch(err => res.status(400).json(err))
}
const createRolpermission = (req, res) => {
  const data = req.body
  const rolpermission = new Rolpermission(data)
  rolpermission.save()
    .then(response => responseHelper(res, response, 201, 'Se asignó un permiso al rol correctamente'))
    .catch(err => res.status(400).json(err))
}
const updateRolpermission = (req, res) => {
  const { id } = req.params
  const data = req.body

  Rolpermission.findById({ _id: id })
    .then(responseRolpermission => {
      if (responseRolpermission === null) return responseHelper(res, responseRolpermission, 200, 'El Rol y Permiso no existe')
      const newData = { ...data }
      Rolpermission.findByIdAndUpdate(id, newData)
        .then(responseUp => {
          Rolpermission.find(responseUp._id)
            .then(responseNewData => responseHelper(res, responseNewData, 200, 'Se cambion el permiso al rol correctamente.'))
            .catch(err => res.status(404).json(err))
        })
        .catch(err => res.status(404).json(err))
    })
    .catch(err => res.status(404).json(err))
}
const deleteRolpermission = (req, res) => {
  const { id } = req.params

  Rolpermission.findById(id)
    .then(response => {
      // Validar que el Rolpermission exista
      if (response === null) return responseHelper(res, response, 200, 'El Rol y Permiso no existe')
      // Ejecutar la accion de eliminar
      Rolpermission.findByIdAndDelete(id)
        .then(response => responseHelper(res, response, 200, 'Se desvinculó el rol del permiso correctamente'))
        .catch(err => res.status(400).json(err))
    })
    .catch(err => res.status(400).json(err))
}

module.exports = { getRolpermissions, getRolpermission, createRolpermission, updateRolpermission, deleteRolpermission }
