const tecnologias = ["Vue", "JavaScript", "Node.js"];
const numeros = [1, 2, 3, 4, 5];

// .includes():
// Sirve para saber si un elemento EXISTE dentro de un array.
// Devuelve TRUE si el elemento está, y FALSE si no está.
let resultado = tecnologias.includes("Vue"); // ¿Está "Vue" dentro del array 'tecnologias'? Respuesta: true
console.log("Resultado de includes:", resultado); // Imprime: Resultado de includes: true

// .findIndex():
// Sirve para encontrar la POSICIÓN (índice) del PRIMER elemento que cumpla una condición.
// Recibe una función que se ejecuta por cada elemento.
// Si la función devuelve TRUE para un elemento, .findIndex() devuelve el índice de ese elemento y se detiene.
// Si ningún elemento cumple la condición, devuelve -1.
resultado = tecnologias.findIndex(tech => tech === "Vue"); // Busca el índice del elemento que sea igual a "Vue"
console.log("Resultado de findIndex:", resultado); // Imprime: Resultado de findIndex: 0 (porque "Vue" está en la posición 0)

// .some():
// Sirve para saber si AL MENOS UN elemento dentro del array cumple una condición.
// Recibe una función que se ejecuta por cada elemento.
// Si la función devuelve TRUE para al menos un elemento, .some() devuelve TRUE y se detiene.
// Si ningún elemento cumple la condición, devuelve FALSE.
resultado = numeros.some(num => num > 5); // ¿Hay algún número en el array 'numeros' que sea mayor que 5? Respuesta: false
console.log("Resultado de some:", resultado); // Imprime: Resultado de some: false

// .find():
// Sirve para encontrar el PRIMER ELEMENTO que cumpla una condición.
// Recibe una función que se ejecuta por cada elemento.
// Si la función devuelve TRUE para un elemento, .find() devuelve ESE ELEMENTO y se detiene.
// Si ningún elemento cumple la condición, devuelve undefined.
resultado = numeros.find(num => num === 5); // Busca el primer número en el array 'numeros' que sea igual a 5
console.log("Resultado de find:", resultado); // Imprime: Resultado de find: 5

// .every():
// Sirve para saber si TODOS los elementos dentro del array cumplen una condición.
// Recibe una función que se ejecuta por cada elemento.
// Si la función devuelve TRUE para TODOS los elementos, .every() devuelve TRUE.
// Si al menos un elemento no cumple la condición, devuelve FALSE y se detiene.
resultado = numeros.every(num => num > 5); // ¿Son todos los números en el array 'numeros' mayores que 5? Respuesta: false
console.log("Resultado de every:", resultado); // Imprime: Resultado de every: false

// .reduce():
// Sirve para REDUCIR un array a un UNICO VALOR (puede ser un número, string, objeto, etc.).
// Recibe una función que se ejecuta por cada elemento del array.
// Esta función recibe dos parámetros principales:
//   - Un "acumulador" (aquí llamado 'total'): guarda el resultado parcial de la reducción.
//   - El "valor actual" del elemento (aquí llamado 'numero').
// También recibe un segundo argumento opcional después de la función (aquí es 0): este es el valor inicial del acumulador.
resultado = numeros.reduce((total, numero) => total + numero, 0); // Suma todos los números del array 'numeros'
// En cada paso:
// - total empieza en 0.
// - Se suma el 'numero' actual al 'total'.
// - El nuevo 'total' se pasa a la siguiente iteración.
console.log("Resultado de reduce (suma):", resultado); // Imprime: Resultado de reduce (suma): 15

// .filter():
// Sirve para CREAR UN NUEVO ARRAY con SOLO los elementos que cumplan una condición.
// Recibe una función que se ejecuta por cada elemento.
// Si la función devuelve TRUE para un elemento, ese elemento se incluye en el nuevo array.
resultado = tecnologias.filter(tech => tech !== "Vue"); // Crea un nuevo array con las tecnologías que NO son "Vue"
console.log("Resultado de filter:", resultado); // Imprime: Resultado de filter: [ 'JavaScript', 'Node.js' ]

//De todos estos metodos el mas utilizado suele ser el filter en el desarrollo web