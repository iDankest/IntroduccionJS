//Manipulacion del DOM
//El DOM es el Document Object Model es el arbol de objetos que se genera al cargar una pagina web
//Podemos acceder a los elementos del DOM con document.getElementById("id")
//Podemos acceder a los elementos del DOM con document.querySelector("selector")
//Podemos acceder a los elementos del DOM con document.querySelectorAll("selector")
//Podemos acceder a los elementos del DOM con document.getElementsByClassName("clase")
//Podemos acceder a los elementos del DOM con document.getElementsByTagName("tag")
//Podemos acceder a los elementos del DOM con document.getElementsByName("name")
//Podemos acceder a los elementos del DOM con document.get
const heading = document.querySelector(".heading");
console.log(heading);
console.log(heading.textContent);
heading.textContent = "Estoy manipulando el DOM";
const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces);
