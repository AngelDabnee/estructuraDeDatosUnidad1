/**
 * @function Fibonacci
 * @description Se utiliza para conseptos de recursión y optimización, medir rendimiento, y eficiencia de los algoritmos.
 * @param {Integer} n - Enero de Entrada
 * @return {Integer} - Factorial de n.
 * @see [fibonacci](https://www.adaweb.es/serie-de-fibonacci-en-javascript/)
 * @example const n = 10;
        const resultado = fibonacci(n);
        console.log(resultado); // Imprimirá: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 */
function fabonacci(n){
    const fibonacciSecuencia = [];

    if(n>= 1){
        fibonacciSecuencia.push(0);
    }
    if(n>= 2){
        fibonacciSecuencia.push(1);
    }
    for(let i = 2; i<n; i++){
        const nextTerm = fibonacciSecuencia[i - 1] + fibonacciSecuencia[i - 2];
        fibonacciSecuencia.push(nextTerm);
    }
    return fibonacciSecuencia;
}
export { fabonacci }
