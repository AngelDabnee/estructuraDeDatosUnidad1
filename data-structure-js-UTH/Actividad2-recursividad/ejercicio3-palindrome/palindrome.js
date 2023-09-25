/**
 * @function Palindrome
 * @description Un palíndromo es una palabra que se lee igual de izquierda a derecha y de derecha a izquierda. La función de un palíndromo es ser una palabra que puede leerse de la misma manera forward y backward
 * @param {Integer} cadena - cadena de Entrada
 * @see [Palindrome](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwin7v6LtcSBAxXJMEQIHdG2DyIQFnoECBgQAw&url=https%3A%2F%2Fwww.laps4.com%2Fpreguntas-y-respuestas%2Fque-funcion-tiene-el-palindromo&usg=AOvVaw2O98RTVKbg2A49y74388ux&opi=89978449)
 * @example "Anita lava la tina"
 */
function esPalindromo(cadena) {
    // Convertir la cadena a minúsculas y eliminar espacios y signos de puntuación
    cadena = cadena.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  
    // Revertir la cadena
    const cadenaRevertida = cadena.split('').reverse().join('');
  
    // Comparar la cadena original con la cadena revertida
    return cadena === cadenaRevertida;
  }
  
  export { esPalindromo }
  