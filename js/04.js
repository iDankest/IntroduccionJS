// Profundizar en Obejtos



//Ejemplo de como desglosar un objeto sin tener que tener que tener variables
const producto = {
    nombre : "tablet",
    precio : 300,
    disponible : true
};
console.log(producto);// asi accedes al obejto completo
console.log(producto.nombre);// asi accedes a la propiedad nombre
console.log(producto.precio);// asi accedes a la propiedad precio
console.log(producto.disponible);// asi accedes a la propiedad disponible
console.log(producto["nombre"]);// asi accedes a la propiedad nombre con notacion de corchetes 
// esta es otra forma de acceder a las propiedades de un objeto ["nombre"] o producto.nombre es similar
//asi accedes a la propiedad nombre
producto.nombre = "monitor";
console.log(producto);

//destructuring
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
//destructuring sirve para extraer las propiedades de un objeto y crear variables con ellas
// vs Object Literal
const autenticado = true;
const usuario = "Juan";
const nuevoObjeto = { autenticado, usuario, mascota: "perro" }; //enhanced object literal
console.log(nuevoObjeto);