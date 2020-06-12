const express = require('express'),
  app = express(),
  cors = require('cors'),
  logger = require('morgan'),
  PORT = process.env.PORT || 5000,
  indexRouter = require('./routes/index')

  //CORS
 const listaBlanca = ['http://localhost:3000'];
 const corsOptions = {
   origin: (origin,callback) => {
     const existe = listaBlanca.some(dominio => dominio === origin);
     if(existe){
       callback(null, true)
     }else{
       callback(new Error('Contenido No Accesible ,Consulte al Admin del Sistema!'))
     }
   }
 } 

app.use(cors(corsOptions))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(logger('dev'))

// ROUTES

app.use('/v1', indexRouter)


app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`)
})

module.exports = app;
