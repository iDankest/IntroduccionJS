const url = "https://jsonplaceholder.typicode.com/comments"
//Fetch API and promises

const consultarAPI = () => {
    fetch(url)
    .then((respuesta)=>{
        return respuesta.json()
    })
    .then(resultado=>{
        console.log(resultado)
    })
    .catch(error=>{
        console.log(error)
    })
    .finally(()=>{
        console.log("Finalizado")
    })     
}
consultarAPI();