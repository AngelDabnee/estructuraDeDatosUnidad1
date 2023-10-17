import { difArreglos } from "../difArreglos";

describe('Suite de pruebas para la función obtener el unico elemento que no se repite en dos arreglos', () => {
  beforeAll(() => {
    console.info('Autor: Hecho por Angel Dabnee');
  });
  it('debería de darnos el número de diferencia, en este caso el 3', () => {
    const arreglo1 = [1, 2];
    const arreglo2 = [1, 2, 3];
    const resultado = difArreglos(arreglo1, arreglo2);
    expect(resultado).toEqual([3]);
});
it('debería de darnos el número de diferencia, en este caso el 4 y 10', () => {
    const arreglo1 = [1, 2,3,4,5,6,7,8,9,10];
    const arreglo2 = [1, 2,3,5,6,7,8,9];
    const resultado = difArreglos(arreglo1, arreglo2);
    expect(resultado).toEqual([4,10]);
});  
});
