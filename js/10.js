const tecnologias = ["Vue", "JavaScript", "Node.js"];

tecnologias.push("git");//Esto muta el array original osea modifica el array original

//usamos el spread operator para crear un nuevo array
const tecnologias2 = [...tecnologias, "git"];//Esto no muta el array original asi que crea un nuevo array con los elementos del array original mas el nuevo elemento git
// si por ejemplo quieres tener el git al principio tambien lo podemos hacer con el spread operator
const tecnologias3 = ["git", ...tecnologias];
console.log(tecnologias3);
tecnologias3.pop();
//esto elmina el ultimo elemento del array


console.log(tecnologias);

//Leyenda 
//.push muta el array original añadiendo un nuevo elemento al final de el
//.pop muta el array original eliminando el ultimo elemento del array
//.unshift muta el array original añadiendo un nuevo elemento al inicio del array
//.shift muta el array original eliminando el primer elemento del array
//Temenos .splice para eliminar uno de una posicion especifica | Ejmplo tecnologias.splice(1,1); esto eliminaria el elemento en la posicion 1
// Si quieres eliminar varios tendrias que poner tecnologias.splice(1,2); esto eliminaria el elemento en la posicion 1 y 2
//Despues tenemos .fliter para filtrar un array que te arroja una funcion callback
const tecnologias5 = tecnologias.filter(function(elemento){//dentro de los()podemos añadir una variable por decir asi temporal que solo se usa dentro de la funcion
//Esto es una funcion callback
return elemento !== "Vue";
})//Esto te arroja un nuevo array con los elementos que cumplen la condicion
console.log(tecnologias5);//Mostraria ["JavaScript", "Node.js"] es una manera mas moderna de filtrar un array