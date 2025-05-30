//Arrow functions
// la ventaja de las arrow functions es que son mas cortas en sintaxis usarias una flecha en vez de function
const sumar =(a,b)=>a+b;//Como se ve tampoco hace falta el return
// ejemplo
const tecnologias = ["Vue", "JavaScript", "Node.js"];
tecnologias.forEach(tech, i=>console.log(tech, i));
const tecnologias2 = tecnologias.map(tech=>tech);
console.log(tecnologias2);

const tecnologia3 = tecnologias.filter(tech=>tech !== "Vue");// como se ve acorta toda la sintaxis
console.log(tecnologia3);
//Este tipo de funciones se pueden usar en funciones expresivas pero no en funciones declarativas