import { Schema, model } from "mongoose";

const EsquemaVentas = new Schema({
    cliente: {
        type: String,
        required: true
    },
    comic: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

export const TablaVentas = model("Ventas", EsquemaVentas);