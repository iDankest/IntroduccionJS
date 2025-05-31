// ESM - EcmaScript Modules
//Antes tienes que tener en cuenta que debes tener un archivo html y un archivo js con type="module"
import {sumar, restar} from "./funciones.js";
console.log(sumar(1,2));
console.log(restar(1,2));
//Tambien puedes importar todo el archivo
// import * as funciones from "./funciones.js";
// console.log(funciones.sumar(1,2));
// console.log(funciones.restar(1,2));
// //Tambien puedes importar una funcion y darle un alias
// import {sumar as suma} from "./funciones.js";
// console.log(suma(1,2));
// //Tambien puedes importar una funcion y darle un alias
// import {restar as resta} from "./funciones.js";
// console.log(resta(1,2));
// //Tambien puedes importar una funcion y darle un alias
// import {sumar as suma, restar as resta} from "./funciones.js";
// console.log(suma(1,2));
// console.log(resta(1,2));
// Ejemplo con Vue import {ref, ...} from "vue";