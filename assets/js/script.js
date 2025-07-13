import propiedades_alquiler from "./data/propiedades_alquiler.js";
import propiedades_venta from "./data/propiedades_venta.js";
import pintarhtml from "./data/utiles/pintarhtml.js";

const seccionVenta = document.querySelector("#venta > .row")
const seccionAlquiler = document.querySelector("#alquiler > .row")

pintarhtml(seccionVenta, propiedades_venta, 3)
pintarhtml(seccionAlquiler, propiedades_alquiler, 3)