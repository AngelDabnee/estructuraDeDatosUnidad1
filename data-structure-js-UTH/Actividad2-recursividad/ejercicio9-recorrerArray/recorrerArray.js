function recorrerArray(arr,index = 0){
    let arreglo;
    if(index<arr.length){
        arreglo = recorrerArray(arr,index +1);
        console.log(arreglo);
    }
}
export {recorrerArray}