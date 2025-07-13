import propiedades_venta from "./data/propiedades_venta.js";
import pintarhtml from "./data/utiles/pintarhtml.js";

const seccionVenta = document.querySelector("#venta > .row")
pintarhtml(seccionVenta, propiedades_venta, 3)