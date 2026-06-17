import { Schema, model } from "mongoose";

const EsquemaVentas = new Schema({
Cliente:String,
Comic:String,
Cantidad:Number,
Cliente:String,
PrecioTotal:Number
});

export const TablaVentas = model("Ventas", EsquemaVentas);