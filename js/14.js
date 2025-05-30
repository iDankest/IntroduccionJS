// function expression
const sumar = function(a,b){
    return a + b;
}
console.log(sumar(1,2));
//diferencia entre function declaration y function expression
//function declaration
function sumar(a,b){
    return a + b;
}
console.log(sumar(1,2));
// la principla diferencia es que una se mete dentro de una variable asi que la lee de arriba hacia abajo y la de declaration es como que la lee de forma global no es exactamente pero asi lo entiendo
// relamente es como si la funcion donde se delcare se eleva arriba de todo a esto se le llama hoisting