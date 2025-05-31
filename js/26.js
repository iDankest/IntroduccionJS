//Eventos en JS con formularios
const inputNombre = document.querySelector("#nombre");
const inputPassword = document.querySelector("#password");
// Reto: Mostrar los que se escribe en el heading
inputNombre.addEventListener("input", function(e){
    const heading = document.querySelector(".heading");
    heading.textContent = e.target.value;
})
inputPassword.addEventListener("input", function(e){
    e.target.type = 'text';// Tambien lo puedes hacer sin el evento llamando a inputPassword.type = 'text';
    setTimeout(() => {
        e.target.type = 'password';
    }, 100);
})

