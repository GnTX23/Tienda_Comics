import {Schema, model} from "mongoose";

const EsquemaProveedores = new Schema({
    ID_Proveedor: String,
    Gmail: String,
    Contacto_principal: String,
    Telefono: Number,
    Empresa_Distribuidora: String,
    Direccion: String

})

export const TablaProveedores = new model("Proveedores", EsquemaProveedores);