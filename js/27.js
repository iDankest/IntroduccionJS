//Eventos tipo submit
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
   const nombre =document.querySelector("#nombre").value;
   const password =document.querySelector("#password").value;
   if(nombre === "" || password === ""){
       alert("Todos los campos son obligatorios");
   }else{
       alert("Formulario enviado");
   }
})