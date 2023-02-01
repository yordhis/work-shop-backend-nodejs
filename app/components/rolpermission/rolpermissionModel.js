const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rolpermissionSchema = new Schema({
  rol: String,
  permission: String
})

const Rolpermission = mongoose.model('Rolpermission', rolpermissionSchema)

module.exports = Rolpermission
