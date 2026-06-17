import { TablaVentas } from "../modules/comis.models.js";

TablaVentas.create({

    Cliente: "Jennifer Lopez",
    Comic: "Spider-Man #1",
    Cantidad: 2,
    Precio: 120,
    Total: 240
})

export const test5 = (()=>console.log("Si se esta llamando a la base de datos"));