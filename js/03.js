// Tipos de datos
//Si no se le asigna un valor a una variable, se le asigna undefined
let nombre;
console.log(nombre);//undefined
console.log(typeof nombre);//undefined - Esto te saldria por consola

const descuento =  true;// Esto seria un dato booleano
console.log(descuento);
console.log(typeof descuento);
// numero
const numero = 10;
const numero2 = 10.10;// numero flotante
const numero3 = -10;// numero negativo
console.log(numero);
console.log(typeof numero);
console.log(numero2);
console.log(typeof numero2);
console.log(numero3);
console.log(typeof numero3);
// Todos son number
// string
const alumno = "Juan";
let producto = "Monitor";
let precio = "200";
console.log(alumno);
console.log(typeof alumno);
console.log(producto);
console.log(typeof producto);
console.log(precio);
console.log(typeof precio); // es String dado que tiene comillas

const numeroGrande = BigInt(9007199254740991);// usa el constructor BigInt
console.log(numeroGrande); //te muestra el numero grande 1n
console.log(typeof numeroGrande); //te muestra BigInt
// bigInt es para numeros grandes y no se puede usar el constructor Number no puedes mesclar BigInt con Number
console.log(Number( numeroGrande) + numero);// combirtiendolo a numbre si te dejaria operar
// esto es una conversion explicita
//Symbols
const simbolo = Symbol(1);
const simbolo2 = Symbol(1);
console.log(simbolo === simbolo2);//false
// los simbolos son unicos
//object
const persona = {};
const descuentito = null;
const numerosArray = [1,2,3,4,5];
console.log(typeof persona);
console.log(typeof descuentito);
console.log(typeof numerosArray);
//Todos son considerados objetos
    