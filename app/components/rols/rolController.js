const responseHelper = require('../../helpers/responseHelper')
const Rol = require('./rolModel')

const getRols = (req, res) => {
  Rol.find()
    .then(response => responseHelper(res, response))
    .catch(err => res.status(400).json(err))
}
const getRol = (req, res) => {
  const { id } = req.params
  Rol.findById(id)
    .then(response => responseHelper(res, response))
    .catch(err => res.status(400).json(err))
}
const createRol = (req, res) => {
  const data = req.body
  const rol = new Rol(data)
  rol.save()
    .then(response => responseHelper(res, response, 201, 'El Rol se creó correctamente'))
    .catch(err => res.status(400).json(err))
}
const updateRol = (req, res) => {
  const { id } = req.params
  const data = req.body

  Rol.findById({ _id: id })
    .then(responseRol => {
      const newData = { ...data }
      Rol.findByIdAndUpdate(id, newData)
        .then(responseUp => {
          Rol.find(responseUp._id)
            .then(responseNewData => responseHelper(res, responseNewData, 200, 'El Rol se actualizó correctamente.'))
            .catch(err => res.status(404).json(err))
        })
        .catch(err => res.status(404).json(err))
    })
    .catch(err => res.status(404).json(err))
}
const deleteRol = (req, res) => {
  const { id } = req.params

  Rol.findById(id)
    .then(response => {
      // Validar que el rol exista
      if (response === null) return responseHelper(res, response, 200, 'El rol no existe')
      // Ejecutar la accion de eliminar
      Rol.findByIdAndDelete(id)
        .then(response => responseHelper(res, response, 200, 'El Rol se eliminó correctamente'))
        .catch(err => res.status(400).json(err))
    })
    .catch(err => res.status(400).json(err))
}

module.exports = { getRols, getRol, createRol, updateRol, deleteRol }
