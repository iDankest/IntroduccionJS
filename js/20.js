//Operador ternario - (condicion ? valor_si_verdadero : valor_si_falso)
const disponible = 100;
const total = 200;
const tarjeta = false;

const resultado = tarjeta || disponible >= total ? "Puedes pagar" : "No puedes pagar";
console.log(resultado);
//Ternario anidado
const resultado2 = tarjeta || disponible >= total ? "Puedes pagar" : disponible >= total ? "Puedes pagar" : "No puedes pagar";
console.log(resultado2);//Ternario anidado es como juntar if else  pero de forma mas corta, esta forma es mas dificil de leer y mantenimiento
//Por lo personal me gusta mas el if else  para los anidados pero los ternarios son muy utiles para cosas mas simples 
