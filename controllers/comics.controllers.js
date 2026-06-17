import { TablaVentas } from "../models/ventas.models.js";

// Crear venta
export const crearVenta = async () => {
    try {

        const nuevaVenta = await TablaVentas.create({
            cliente: "Jennifer Lopez",
            comic: "Spider-Man #1",
            cantidad: 2,
            precio: 120,
            total: 240
        });

        console.log("Venta registrada");
        console.log(nuevaVenta);

    } catch (error) {
        console.log(error);
    }
};