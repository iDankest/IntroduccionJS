//Destucturing de arrays
const tecnologias = ["Vue", "JavaScript", "Node.js"];
// para ahorrarte esto 

const vuejs = tecnologias[0];
const javascript = tecnologias[1];
const nodejs = tecnologias[2];
console.log(vuejs, javascript, nodejs);
//con destucturing
//const [vuejs2, javascript2, nodejs2] = tecnologias // esto es igual que arriba los valores se mapean automaticamente Ejemplo el primero es 
// Si quieres omitir un valor puedes usar una coma
const [vuejs2, , nodejs2] = tecnologias // esto es igual que arriba los valores se mapean automaticamente Ejemplo el primero es 
console.log(vuejs2, nodejs2);
// Si quieres omitir un valor puedes usar una coma
//const [vuejs2, javascript2, nodejs2] = tecnologias // esto es igual que arriba los valores se mapean automaticamente Ejemplo el primero es 

// como se ve el distructuring es mas rapido y mas limpio lo tienes de una forma mas corta 