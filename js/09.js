//Arrays o arreglos
const tecnologias = ["Vue", "JavaScript", "Node.js"]
console.log(tecnologias);
console.log(tecnologias[0]);// accede al primer elemento del array Asi se accede a los elementos de un array expecifico
console.table(tecnologias);// muestra el array en forma de tabla
//Las arrays pueden almacenar cualquier tipo de dato
const tecnologias2 = ["Vue", "JavaScript", "Node.js", true, 12, null, undefined, {nombre: "Juan", edad: 25}, [1,2,3,4,5]];
//Arrays son mutables
console.log(tecnologias2);
technologias2[0] = "React";
console.log(tecnologias2);
//Arrays bidimensionales
const tecnologias3 = ["Vue", "JavaScript", "Node.js", true, 12, null, undefined, {nombre: "Juan", edad: 25}, [1,2,3,4,5]];
console.log(tecnologias3);
console.log(tecnologias3[8][2]);//Las arrays bidimensionales son aquellas que tienen arrays dentro de ellas
    