/**
 * @function ordenamiento
 * @description  This function will accept an array and Reverse its elements and returns the inverted array
 * @param {Array} arr array with elements of any data type
 * @returns {Array} array with order elements
 * @see [Reverse](https://www.freecodecamp.org/espanol/news/algoritmos-de-ordenacion-explicados-con-ejemplos-en-javascript-python-java-y-c/)
 */
  // Función de intercambio
function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
function ordenamiento(arr) {
    var cadena = arr.length;
    for (var i = 0; i < cadena - 1; i = i + 1) {
      var nuevaPosicion = i;
      for (var k = i + 1; k < cadena; k = k + 1) {
        if (arr[k] < arr[nuevaPosicion]) {
          nuevaPosicion = k;
        }
      }
      if (nuevaPosicion !== i) {
        swap(arr, i, nuevaPosicion);
      }
    }
}
export {ordenamiento};

  
  