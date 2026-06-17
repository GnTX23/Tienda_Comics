import {TablaTrabajadores} from '../modules/trabajadores_models.js';

TablaTrabajadores.create({
    nombre: 'Juan Perez',
    puesto: 'Administrador de Ventas',
    matricula: 'comicsADMV-001',
    correo: 'juan.perez@comics.com',
    salario: 4500.00,
},
{
    nombre: 'Maria Lopez',
    puesto: 'Asistente de Marketing',
    matricula: 'comicsAM-002',
    correo: 'maria.lopez@comics.com',
    salario: 3500.00,
},
{
    nombre: 'Carlos Ramirez',
    puesto: 'Desarrollador de Software',
    matricula: 'comicsDS-003',
    correo: 'carlos.ramirez@comics.com',
    salario: 4000.00,
},
{
    nombre: 'Ana Martinez',
    puesto: 'Vendedora de Comics',
    matricula: 'comicsVC-004',
    correo: 'ana.martinez@comics.com',
    salario: 3000.00,
},
{
    nombre: 'Luis Gonzalez',
    puesto: 'Diseñador Gráfico',
    matricula: 'comicsDG-005',
    correo: 'luis.gonzalez@comics.com',
    salario: 3500.00,
},
{
    nombre: 'Sofia Torres',
    puesto: 'Gerente de Proyectos',
    matricula: 'comicsGP-006',
    correo: 'sofia.torres@comics.com',
    salario: 5000.00,
})

export const test4 = ()=> console.log("Si se esta llamando al controlador correctamente")
