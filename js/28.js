//Eventos tipo submit
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    //prvenir alertas anteriores
    const alertaPrevia = document.querySelector(".alerta");
    alertaPrevia?.remove();//El ? es para que no lance error si no existe Tambien puedes usar if(alertaPrevia){alertaPrevia.remove();}
    //generar alerta
    const alerta = document.createElement("P");
    alerta.textContent = "Todos los campos son obligatorios";
    alerta.classList.add("alerta", "bg-red-500", "text-white", "p-2", "text-center");
    alerta.innerHTML = "Todos los campos son obligatorios";
   const nombre =document.querySelector("#nombre").value;
   const password =document.querySelector("#password").value;
   if(nombre === "" || password === ""){
       formulario.appendChild(alerta);
       setTimeout(() => {
           alerta.remove();
       }, 3000);
   }else{
       alert("Formulario enviado");
   }
})