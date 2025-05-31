//Eventos en JS 
//Los eventos son acciones que ocurren en el navegador
const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a");

heading.addEventListener("click",function(){
    heading.textContent = "Click";
    heading.style.color = "red";
})

enlaces.forEach(enlace => {
    enlace.addEventListener("click", (e)=>{//e es el evento
        e.preventDefault();//Esto evita que el enlace se abra
        enlace.textContent = "Click";
    })
})