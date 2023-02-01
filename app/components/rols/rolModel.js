const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rolSchema = new Schema({
  name: String
})

const Rol = mongoose.model('Rol', rolSchema)

module.exports = Rol
