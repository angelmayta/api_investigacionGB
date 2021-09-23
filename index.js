
const express = require ('express');  //sintaxis para importar modulos en nodejs
require('dotenv').config();
const {dbConection} = require('./config/database');
const cors = require ('cors');


//crear el servidor express
const app = express();

//Estableciendo la configuracion de cors
app. use(cors());

//Crear la conexion a la BD
dbConection();


//Creando las rutas de mi APP
app.get('/',(req,res)=>{
    res.status(400).json({
        ok:true,
        msg: 'Bienvenidos a la App Proyectos'
    });
});



//Codigo para desplegar el servidor
app.listen(3000,() =>{
    console.log ('Servidor Nodejs desplegado en el puerto'+ 3000)
})

//Nombre: adminproject
// Password de la BD
// Z0pPcG4qQb6qqnsj
