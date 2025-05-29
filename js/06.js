//Formas de unir dos obejtos
const producto = {
    nombre : "tablet",
    precio : 300,
    disponible : true
};
const cliente = {
    nombre : "Juan",
    edad : 25,
    genero : "Masculino"
};
const nuevoObjeto = Object.assign(producto, cliente);
console.log(nuevoObjeto);
//otra forma de unir dos objetos
const nuevoObjeto2 = {
    producto,
    cliente
}
console.log(nuevoObjeto2);
//util para retornar respuestas de una API
const nuevoObjeto3 = {...producto, ...cliente};
console.log(nuevoObjeto3);
//otra forma de unir dos objetos