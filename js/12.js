//Iteradores en JavaScript
const tecnologias = ["Vue", "JavaScript", "Node.js"];

// Si quieres mostar todos los elemento de una array podrias hacerlo de una forma larga y meter todos los elementos en una variable o usar un iterador/bucle
//Manera larga y ineficiente
const vuejs = tecnologias[0];
const javascript = tecnologias[1];
const nodejs = tecnologias[2];
console.log(vuejs, javascript, nodejs);//Esta seria una manera muy ineficiente de mostrar los elementos de un array

// para Arreglos o arrays los mas comunes son los foreach
tecnologias.forEach(function(tech, i){// tech es el elemento y i es el indice
    //console.log(tech, i)//Se puede hacer aun mas corto con las arrow functions =>
        return tech, i; // aunque puedes usar el console.log en funciones para retornar algo se usa la palabra reservada return
})
//o map
const tecnologias2 = tecnologias.map(function(tech, i){
    return tech;// la diferencia entre el foreach y el map es que el map retorna un nuevo array
})
//Como esto va de Vue.js en Vue puedes usar el V-for para iterar sobre un array y es mucho mas comodo

/*
  <template>
    <div>
      <ul>
        <li v-for="(tecnologia, index) in tecnologias" :key="index">
          {{ tecnologia }} - Índice: {{ index }}
        </li>
      </ul>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue';
  const tecnologias = ref(["Vue", "JavaScript", "Node.js"]);
  </script>
*/