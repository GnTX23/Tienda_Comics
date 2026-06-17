import {Schema, model} from 'mongoose';

const EsquemaClientes = new Schema({
    id_nombre: Number,
    nombre: String,
    apellido: String,
    telefono: Number,
    email: String,});

    export const TablaClientes = new model('Tabla de Clientes', EsquemaClientes);   