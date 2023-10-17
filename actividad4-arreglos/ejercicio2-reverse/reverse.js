/**
 * @function reverse
 * @description  This function will accept an array and Reverse its elements and returns the inverted array
 * @param {Array} arr array with elements of any data type
 * @returns {Array} array with inverted elements
 * @see [Reverse](https://www.geeksforgeeks.org/write-a-program-to-Reverse-an-array-or-string/)
 */
function revertir(cadena) {
    var cadenaNueva = "";
    for (var i = cadena.length - 1; i >= 0; i--) {
        cadenaNueva += cadena[i]; // Utiliza += para concatenar los caracteres invertidos
    }
    return cadenaNueva;
}

export { revertir };