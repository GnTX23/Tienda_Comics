import { TablaClientes } from "../modules/clientes_modules.js";

TablaClientes.create({
    id_nombre: 1,
    nombre: 'Juan',
    apellido: 'Perez',
    telefono: 4496760476,
    email: 'juan.perez@example.com'
}
,
{
    id_nombre: 2,
    nombre: 'Pedro',
    apellido: 'Sanchez',
    telefono: 4498627623,
    email: 'PedroS@example.com'
}
,
{
    id_nombre: 3,
    nombre: 'Maria',
    apellido: 'Lopez',
    telefono: 4490458742,
    email: 'mlopez@example.com'
}
,
{
    id_nombre: 4,
    nombre: 'Sofia',
    apellido: 'Rendon',
    telefono: 4497652387,
    email: 'sofren@example.com'
}
,
{
    id_nombre: 5,
    nombre: 'Gonzalo',
    apellido: 'Torres',
    telefono: 4490935134,
    email: 'GonzaloT21@example.com'
}
);


export const test = () => console.log ("Si está llamando al controlador")