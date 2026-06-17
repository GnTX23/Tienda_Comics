import {TablaProveedores} from "../Models/proveedores.models.js";

TablaProveedores.create(
  {
    ID_Proveedor: "PROV-001",
    Gmail: "contacto.techglobal@gmail.com",
    Contacto_principal: "Carlos Mendoza",
    Telefono: 5551234567,
    Empresa_Distribuidora: "TechGlobal Distribuciones",
    Direccion: "Av. de la Innovación 404, CDMX, México"
  },
  {
    ID_Proveedor: "PROV-002",
    Gmail: "ventas.logistica@gmail.com",
    Contacto_principal: "Ana María Silva",
    Telefono: 5557654321,
    Empresa_Distribuidora: "Logística Express del Norte",
    Direccion: "Calle Industrial 12, Monterrey, NL, México"
  },
  {
    ID_Proveedor: "PROV-003",
    Gmail: "soporte.alimentos@gmail.com",
    Contacto_principal: "Jorge Luis Torres",
    Telefono: 3339876543,
    Empresa_Distribuidora: "Distribuidora de Alimentos S.A.",
    Direccion: "Blvd. de los Sabores 789, Guadalajara, Jal, México"
  },
  {
    ID_Proveedor: "PROV-004",
    Gmail: "textiles.marquez@gmail.com",
    Contacto_principal: "Elena Márquez",
    Telefono: 2223456789,
    Empresa_Distribuidora: "Textiles y Telas del Centro",
    Direccion: "Pasaje de la Moda 45, Puebla, Pue, México"
  },
  {
    ID_Proveedor: "PROV-005",
    Gmail: "quimicos.seguros@gmail.com",
    Contacto_principal: "Roberto Gómez",
    Telefono: 4425678901,
    Empresa_Distribuidora: "Suministros Químicos Integrales",
    Direccion: "Zona Industrial Alfa, Querétaro, Qro, México"
  },
  {
    ID_Proveedor: "PROV-006",
    Gmail: "eco.empaques@gmail.com",
    Contacto_principal: "Sofía Villarreal",
    Telefono: 8186543210,
    Empresa_Distribuidora: "Empaques Ecológicos de México",
    Direccion: "Av. Ecológica 101, San Pedro, NL, México"
  }
)

export const test = (()=>console.log("Si se esta llamando al controlador"));