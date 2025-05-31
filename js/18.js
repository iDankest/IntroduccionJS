// Operador de comparacion 

const num1 = 10;
const num2 = "20";
//Number() convierte el string en un numero te aseguras que siempre sea un numero
if(num1 === Number(num2)){// == compara el valor y si pones === compara el valor y el tipo de dato devuelve true o false
    console.log("num1 es igual a num2");
}else{
    console.log("num1 no es igual a num2");
}
//Recomendacion usar === en vez de ==