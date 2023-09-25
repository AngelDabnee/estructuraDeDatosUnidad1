/**
 * @function busquedaBinaria
 * @description para encontrar un elemento en una lista ordenada de elementos. Funciona al dividir repetidamente a la mitad la porción de la lista que podría contener al elemento, hasta reducir las ubicaciones posibles a solo una.
 * @param {arr} elemento - cadena de Entrada
 * @see [busquedaBinaria](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiPiqOlvcSBAxXHJEQIHQ1_CuUQFnoECBkQAw&url=https%3A%2F%2Fes.khanacademy.org%2Fcomputing%2Fcomputer-science%2Falgorithms%2Fbinary-search%2Fa%2Fbinary-search&usg=AOvVaw0KI-pwhcMhfWu5O8rzfmSL&opi=89978449)
 */
function busquedaBinaria(arr, elemento) {
    let inicio = 0;
    let fin = arr.length - 1;
  
    while (inicio <= fin) {
      const medio = Math.floor((inicio + fin) / 2);
  
      if (arr[medio] === elemento) {
        return medio; // Elemento encontrado, devolver su índice
      } else if (arr[medio] < elemento) {
        inicio = medio + 1; // Descartar la mitad izquierda
      } else {
        fin = medio - 1; // Descartar la mitad derecha
      }
    }
  
    return -1; // Elemento no encontrado
  }
  
  export { busquedaBinaria }
  