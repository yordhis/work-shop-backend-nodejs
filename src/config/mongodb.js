const { mongodb } = require('../constants/mongokey')
const mongoose = require('mongoose')

mongoose.set('strictQuery', true)
const connection = mongoose.connect(`mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`)
  .then(() => {
    console.log('Conexion exitosa')
  }).catch((err) => {
    console.log('Error en la conexion: ' + err)
  })

module.exports = connection
