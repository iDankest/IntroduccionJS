// Optional chaining o encadenamiento opcional

const alumno = {
    nombre: "Juan",
    clase: "Programacion",
    aprobado: true
}

setTimeout(() => {
    alumno.examenes = {
        examen1: 10,
        examen2: 20,
        examen3: 30
    }
    console.log(alumno.examenes?.examen1);
}, 2000);
//esto es util para cuando no sabes si un objeto tiene una propiedad o no | Su sintaxis es objeto?.propiedad 
//Este ejemplo con el setTimeout es para simular una llamada a una API y revisar si el objeto tiene una propiedad