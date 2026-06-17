import {Schema, model} from 'mongoose';

const EsquemaTrabajadores = new Schema ({
    nombre: String,
    puesto: String,
    matricula: String,
    correo: String,
    salario: Number,    
})
export const TablaTrabajadores = new model('Trabajadores Actuales', EsquemaTrabajadores);



