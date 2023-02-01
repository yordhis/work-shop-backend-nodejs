const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  id_rol: String,
  id_company: String
})

const User = mongoose.model('User', userSchema)

module.exports = User
