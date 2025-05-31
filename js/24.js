const enlaces = document.querySelectorAll(".navegacion a");// es un nodelist osea te trae una coleccion de elementos
const heading = document.querySelector(".heading");

heading.textContent = "Estoy manipulando el DOM";
heading.classList.remove("text-4xl");

const imputNombre = document.querySelector("#nombre");
imputNombre.value = "Juan";

enlaces.forEach(enlace => enlace.textContent = "Enlace modificado");
enlaces[0].textContent = "Enlace 1";