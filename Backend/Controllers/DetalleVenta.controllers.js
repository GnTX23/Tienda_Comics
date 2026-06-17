import { TablaDetalle } from "../Models/DetalleVenta.model";

TablaDetalle.create(
{
        IdDetalle: 1,
        IdVenta: 1,
        IdComic: 1,
        Cantidad: 2,
        Subtotal: 500
    }
    ,
    {
        IdDetalle: 2,
        IdVenta: 1,
        IdComic: 2,
        Cantidad: 1,
        Subtotal: 180
    }
    ,
    {
        IdDetalle: 3,
        IdVenta: 2,
        IdComic: 4,
        Cantidad: 1,
        Subtotal: 350
    }
    ,
    {
        IdDetalle: 4,
        IdVenta: 2,
        IdComic: 4,
        Cantidad: 3,
        Subtotal: 480
    }
    ,
    {
        IdDetalle: 5,
        IdVenta: 3,
        IdComic: 3,
        Cantidad: 2,
        Subtotal: 340
    }
    ,
    {
        IdDetalle: 6,
        IdVenta: 3,
        IdComic: 5,
        Cantidad: 1,
        Subtotal: 190
    }
    ,
    {
        IdDetalle: 7,
        IdVenta: 4,
        IdComic: 5,
        Cantidad: 2,
        Subtotal: 440
    }
    ,
    {
        IdDetalle: 8,
        IdVenta: 5,
        IdComic: 2,
        Cantidad: 1,
        Subtotal: 400
    }
)

export const test = (()=>console.log("Si se esta llamando a la base de datos "));