/**
 * @function difArreglos
 * @description  this function return new array with de element what yo repit. 
 * @param {Array} arr array with elements of any data type
 * @returns {Array} array with order elements
 * @see [Reverse](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays)
 * */

function difArreglos(arr1,arr2){
    const newArr = [];

    function eliminacionElementosIguales(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (let i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }
  
    eliminacionElementosIguales(arr1, arr2);
    eliminacionElementosIguales(arr2, arr1);
  
    return newArr;
}
export {difArreglos};