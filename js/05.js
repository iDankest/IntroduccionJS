const persona = {
    nombre : "Juan",
    edad : 25,
    genero : "Masculino"
};
//Object.freeze(persona);//Congela el objeto persona y no se puede modificar
//Object.seal(persona);//Congela el objeto persona y no se puede modificar con matizes puedes reescribirlo pero no agregar nuevas propiedades ni eliminarlas
    //reescribe el objeto persona
persona.nombre = "Pedro";
//agrega una nueva propiedad al objeto persona
persona.altura = 1.75;
console.log(persona);
//eliminar una propiedad del objeto persona
delete persona.edad;
console.log(persona);
// espred operator ... es una forma de copiar un objeto y crear uno nuevo teniendo control de las propiedades
const {nombre, genero, ...resto} = persona;
console.log(resto);//Creas resto copiando todo menos nombre y genero
