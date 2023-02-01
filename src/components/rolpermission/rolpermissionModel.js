const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rolpermissionSchema = new Schema({
  id_rol: String,
  id_permission: String
})

const Rolpermission = mongoose.model('Rolpermission', rolpermissionSchema)

module.exports = Rolpermission
