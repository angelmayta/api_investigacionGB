
const express = require ('express');  //sintaxis para importar modulos en nodejs
require('dotenv').config();
const {dbConection} = require('./config/database');
const cors = require ('cors');


//crear el servidor express
const app = express();

//Estableciendo la configuracion de cors
app.use(cors());


app.use(express.json());

//Crear la conexion a la BD
dbConection();


//Creando las rutas de mi APP
app.use('/api/usuarios',require('./routes/usuarios.routes'));

//creando nueva ruta api/login
app.use('/api/login', require('./routes/auth.route'))

//Codigo para desplegar el servidor
app.listen(process.env.PORT,() =>{
    console.log ('Servidor Nodejs desplegado en el puerto'+ process.env.PORT)
})


//Nombre: adminproject
// Password de la BD
// Z0pPcG4qQb6qqnsj
