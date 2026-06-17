import {shema, model} from 'mongoose';

const trabajadoresShema = new shema ({
    nombre: string,
    puesto: string,
    matricula: string,
    correo: string,
    salario: number,    
})
export const Trabajadores = model('Trabajadores Actuales', trabajadoresShema);

