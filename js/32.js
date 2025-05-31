const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

//Forma correcta con promesas

const consultarAPI = async () => {
    const inicio = performance.now();

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    const respuesta2 = await fetch(url2);
    const resultado2 = await respuesta2.json();


    const fin = performance.now();
    console.log(`Tiempo de ejecución: ${fin - inicio}`);
    
}
consultarAPI();//Esta es mas lenta

const consultarAPIBien = async () => {
    const inicio = performance.now();

    const [respuesta, respuesta2] = await Promise.all([ //Promise.all es una promesa que recibe un array de promesas y las ejecuta en paralelo
        fetch(url),
        fetch(url2)
    ])
    const resultado = await respuesta.json();
    const resultado2 = await respuesta2.json();

    const fin = performance.now();
    console.log(`Tiempo de ejecución: ${fin - inicio}`);
    
}
consultarAPIBien();//Esta es mas rapida por la paralelizacion promesas