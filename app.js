import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { test } from "./backend/controllers/clientes_controller.js";


//CONEXION_DB
dotenv.config(); //cargar variables de entorno desde .env
mongoose.connect(process.env.url_db); //Conexion a la base de datos usando la URL del archivo .env



//MENSAJES_CONEXION_DB
mongoose.connection.on('connected', () => {
  console.log('Conexión a la base de datos establecida');
}); //se usa para escuchar el evento 'connected' en la conexión de Mongoose. Cuando se establece una conexión exitosa a la base de datos, se ejecuta la función de callback que imprime un mensaje en la consola indicando que la conexión se ha establecido correctamente.

mongoose.connection.on('error', (error) => {
  console.error('Error al conectar a la base de datos:', error);
}); //se usa para escuchar el evento 'error' en la conexión de Mongoose. Cuando ocurre un error al intentar conectar a la base de datos, se ejecuta la función de callback que imprime un mensaje de error en la consola.



//CREAR_SERVIDOR_LOCAL
const app = express(); //se crea una instancia de la aplicación Express, que se utilizará para configurar y manejar las rutas y middleware del servidor.
app.use(cors()); //Seguridad con CORS, se utiliza el middleware cors() para habilitar el Cross-Origin Resource Sharing (CORS) en la aplicación Express. Esto permite que el servidor acepte solicitudes de diferentes dominios, lo cual es útil cuando el cliente y el servidor están alojados en dominios diferentes.
app.listen (4000, () => {
  console.log('Servidor escuchando en el puerto 4000');
}); //se inicia el servidor Express en el puerto 4000.


test();
