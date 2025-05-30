## Repaso de lo aprendido
" Este es un repaso para perapara mi camino con Vue.js
- Primero tendre un repaso de ES6+
- JavaScript Moderno
- Metodos de iteracion de arrays
- Metodos de arrays
- Codigo condicional
- Funciones
- Arrow functions
- 
  
### Métodos de Iteración de Arrays Comunes en JavaScript

**`forEach()`:**

* **Propósito:** Es fundamental para realizar acciones en cada elemento de un array.
* **Uso:** Se utiliza para iterar sobre los elementos del array y ejecutar una función proporcionada para cada uno de ellos. **No crea un nuevo array.**
* **Casos Comunes:**
    * Actualizar el DOM basándose en los elementos del array.
    * Enviar datos a una API por cada elemento del array.
    * Realizar cualquier otra operación que requiera procesar cada elemento individualmente sin necesidad de un nuevo array.

**`map()`:**

* **Propósito:** Es extremadamente útil cuando necesitas **transformar** los elementos de un array en un **nuevo array**.
* **Uso:** Itera sobre cada elemento del array original y aplica una función proporcionada a cada uno. El valor de retorno de esta función para cada elemento se convierte en el elemento correspondiente del nuevo array.
* **Casos Comunes:**
    * Extraer una propiedad específica de cada objeto en un array de objetos para crear un nuevo array solo con esos valores.
    * Aplicar una operación matemática o lógica a cada número en un array para crear un nuevo array con los resultados.
    * Formatear los elementos de un array para mostrarlos en la interfaz de usuario.

**`filter()`:**

* **Propósito:** Esencial para **seleccionar** un subconjunto de elementos de un array basado en una **condición específica**.
* **Uso:** Itera sobre cada elemento del array original y aplica una función de prueba (que devuelve `true` o `false`). Solo los elementos para los cuales la función de prueba devuelve `true` se incluyen en el **nuevo array** que devuelve `filter()`.
* **Casos Comunes:**
    * Eliminar elementos no deseados de un array basándose en ciertos criterios.
    * Crear una nueva lista que contenga solo los elementos que cumplen con una condición específica (por ejemplo, números mayores que un cierto valor, objetos con una propiedad específica).
    * Buscar elementos que coincidan con un término de búsqueda.