//Template strings
const nombre = "Juan";
const edad = 25;
const genero = "Masculino";
console.log("Se llama " + nombre + " tiene " + edad + " años y es " + genero);
console.log(`Se llama ${nombre} tiene ${edad} años y es ${genero}`);

// con objetos
const producto = {
    nombreProducto : "tablet",
    precioProducto : 300,
    disponibleProducto : true
};
console.log(producto);
console.log(`El producto ${producto.nombreProducto} tiene un precio de ${producto.precioProducto}`);
//con destructuring
const {nombreProducto, precioProducto, disponibleProducto} = producto;
console.log(`El producto ${nombreProducto} tiene un precio de ${precioProducto}`);

