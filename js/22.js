// Scope - es el alcance de una variable
//Scope global es cuando la variable esta fuera de una funcion o bloque
//Puede perder el contexto de this en ciertas situaciones

let precio = 100;
function cambiarPrecio(){
    precio = 200;//Aqui estas modificando la variable global
    //let precio = 200; //Scope local
}
cambiarPrecio();
console.log(precio);//Para evitar esto se puede organizar mejor el codigo