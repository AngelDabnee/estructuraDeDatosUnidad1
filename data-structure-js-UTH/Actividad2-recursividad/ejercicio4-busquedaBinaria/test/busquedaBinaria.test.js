import { busquedaBinaria } from "../busquedaBinaria"
describe('Suite de pruebas para la función de busquedaBinaria()',() => {
    beforeAll(() =>{
        console.info('Autor: Hecho por Angel Dabnee');
    })
    it('Test 1 - Debe devolver 2 para [1, 3, 5, 7, 9] buscando el elemento 5', () => {
        expect(busquedaBinaria([1, 3, 5, 7, 9], 5)).toBe(2);
      });
      it('Test 2 - Debe devolver -1 para [2, 4, 6, 8, 10] buscando el elemento 7', () => {
        expect(busquedaBinaria([2, 4, 6, 8, 10], 7)).toBe(-1);
      });
      it('Test 3 - Debe devolver 0 para [10] buscando el elemento 10', () => {
        expect(busquedaBinaria([10], 10)).toBe(0);
      });
});