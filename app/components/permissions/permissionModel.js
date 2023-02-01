const mongoose = require('mongoose')
const Schema = mongoose.Schema

const permissionSchema = new Schema({
  name: String
})

const Permission = mongoose.model('Permission', permissionSchema)

module.exports = Permission
