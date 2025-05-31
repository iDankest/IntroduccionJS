const url = "https://jsonplaceholder.typicode.com/comments"
//Async/Await try/catch

const consultarAPI = async () => {//El async es obligatorio para que funcione y se pude declarar al inicio de la funcion async function consultarAPI(){
    try {
        const respuesta = await fetch(url);//el fetch es la peticion
        const resultado = await respuesta.json();//el json es la respuesta
        console.log(resultado);
    } catch (error) {//El catch es obligatorio y te dice que paso algo
        console.log(error);
    } finally{//El finally no es obligatorio y se ejecuta siempre
        console.log("todo listo")
    }
}
consultarAPI();
//Esta es la sintaxis mas moderna y para mi la entiendo mejor que el fetch