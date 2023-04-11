require('dotenv').config()

module.exports = {
  mariadb: {
    localhost: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME_MYSQL,
    dialect: process.env.DATABASE_DIALECT
  }
}