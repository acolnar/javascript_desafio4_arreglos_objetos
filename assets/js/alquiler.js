import propiedades_alquiler from "./data/propiedades_alquiler.js";
import pintarhtml from "./data/utiles/pintarhtml.js";

const seccionAlquiler = document.querySelector("#alquiler > .row")
pintarhtml(seccionAlquiler, propiedades_alquiler, 3)