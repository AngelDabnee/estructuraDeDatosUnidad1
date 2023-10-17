import { ordenamiento } from "../ordenamiento"
describe('Suite de pruebas para la función de ordenamiento según selection sort()',() =>{
    beforeAll(() =>{
        console.info('Autor: Hecho por Angel Dabnee');
    })
    it('debería ordenar un arreglo de números', () => {
        const arreglo = [4, 2, 7, 1, 9];
        const arregloOrdenado = [1, 2, 4, 7, 9];
        ordenamiento(arreglo);
        expect(arreglo).toEqual(arregloOrdenado);
      });
      it('debería ordenar un arreglo de letras', () => {
        const letras = ['z', 'c', 'a', 'f', 'e'];
        const letrasOrdenadas = ['a', 'c', 'e', 'f', 'z'];
        ordenamiento(letras);
        expect(letras).toEqual(letrasOrdenadas);
      });
});