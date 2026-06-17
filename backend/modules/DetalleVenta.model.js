import {Schema, model} from "mongoose";

const esquemaDetalleVenta = new schema({
    IdDetalle:Number,
    IdVenta:Number,
    IdComic:Number,
    Cantidad:Number,
    Subtotal:Number,
})

export const TablaDetalle = new model("DetalleVentas",esquemaDetalleVenta);