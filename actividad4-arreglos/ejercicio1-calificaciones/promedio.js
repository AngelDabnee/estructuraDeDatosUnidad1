/**
 * @function calcularPromedioAprobadosYreprobados
 * @description  Esta función realiza un cálculo del promedio general, 
 * la cantidad de aprobados y la cantidad de reprobados
 * validando calificaciones negativas o mayor a 10, retornando las excepciones
 * @param {Array} Calificaciones  (arreglo unidimensional)
 * @returns {JSON } un objeto JSON con estos valores y lo devuelve como una cadena de texto JSON
 * EJ de implementación:
 * const calificaciones = [80, 70, 55, 90, 40];
 * const resultado = calcularPromedioAprobadosYreprobados(calificaciones);
 * console.log(resultado);
 * // El código anterior imprimirá el siguiente resultado en la consola:
{"promedio": 67, "aprobados": 3, "reprobados": 2}
*/

function calcularPromedioAprobadosYreprobados(calificaciones){
    let suma = 0;
    let aprobados = 0;
    let reprobados = 0;
    let calificacionesTotales = calificaciones.length; 
    for(let i = 0; i < calificacionesTotales; i++){
        if(calificaciones[i]>= 60){
            aprobados += 1;
        }else{
            reprobados +=1;
        }
        suma = suma + calificaciones[i];
    }
    let promedio = suma / calificaciones.length; 
    const resultado = {
        "promedio":promedio,
        "aprobados":aprobados,
        "reprobados":reprobados
    };
    return JSON.stringify(resultado);
}
export {calcularPromedioAprobadosYreprobados}