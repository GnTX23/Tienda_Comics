import {shema, model} from 'mongoose';

const trabajadoresSchema = new Schema ({
    nombre: String,
    puesto: String,
    matricula: String,
    correo: String,
    salario: Number,    
})
export const TablaTrabajadores = new model('Trabajadores Actuales', trabajadoresSchema);

    
