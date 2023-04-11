const Sequelize = require('sequelize')
const {mariadb}  = require('../constants/mariadbkey')

const sequelize = new Sequelize(`${mariadb.database}`, 
`${mariadb.username}`, `${mariadb.password}`, {
  host: `${mariadb.localhost}`,
  dialect: `${mariadb.dialect}`,
})

sequelize.authenticate()
  .then(() => {
    console.log('Conectado a mariaDB')
  })
  .catch(err => {
    console.log('No se conecto a DB')
  })

  module.exports = sequelize