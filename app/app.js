const express = require('express')
// const path = require('path')
// eslint-disable-next-line no-unused-vars
const connection = require('./config/mongodb')
const router = require('./routes/routes')
const { notFound, errorHandling } = require('./middlewares/errorHandler')

require('dotenv').config()

const app = express()

app.set('title', process.env.APP_TITLE)
app.set('port', process.env.APP_PORT || 3000)
app.set('host', process.env.APP_HOST)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)
app.use(notFound, errorHandling)

app.listen(app.get('port'), () => {
  console.log(`Nuestra app: ${app.get('title')}, esta corriendo en: http://${app.get('host')}:${app.get('port')}`)
})
