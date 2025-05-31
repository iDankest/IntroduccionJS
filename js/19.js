//Operador || (OR) y && (AND)

const disponible = 100;
const total = 200;
const tarjeta = false;

if (tarjeta || disponible >= total){//El OR (||) es que si una de las condiciones es true se ejecuta && es que si ambas son true se ejecuta
    console.log("Puedes pagar");
}else{
    console.log("No puedes pagar ponte a fregar los platos pobre");
}