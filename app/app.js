const express = require('express')
const path = require('path')
const sequelize = require('./config/mariadb');
(async () => {
  await sequelize.sync();
})();

const router = require('./routes/routes')
const { notFound, errorHandling } = require('./middlewares/errorHandler')

require('dotenv').config()

const app = express()

app.set('title', process.env.APP_TITLE)
app.set('port', process.env.APP_PORT || 3000)
app.set('host', process.env.APP_HOST)

app.use((req, res, next) => {
	res.header('X-Content-Type-Options: nosniff');
  next()
});

// Configuracion de las vistas
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
// Ubicacion de los recursos de multimedia
console.log(__dirname)
app.use(express.static(path.join(__dirname, 'assets')))

app.use(express.urlencoded({ extended: false }))
// app.use(express.json())

app.use(router)
// app.use(notFound, errorHandling)

app.listen(app.get('port'), () => {
  console.log(`Nuestra app: ${app.get('title')}, esta corriendo en: http://${app.get('host')}:${app.get('port')}`)
})

module.exports =  app