'use Strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
    if (err) {
      return console.log(`error al conectar base: ${err}`)
    }
    console.log('conexion a la base de datos')
  
    app.listen(config.port, () => {
      console.log(`puerto:${config.port}`)
    })
  })