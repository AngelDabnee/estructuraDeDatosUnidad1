import { fabonacci } from '../fabonacci.js'

describe('Suite de pruebas para la función de Fabonacci ()', () => {
    beforeAll(() =>{
        console.info('Autor: Hecho por Angel');
    })
    it('Test 1- para n= 0 debe ser un arreglo vacío' ,() =>{
        expect(fabonacci(0)).toEqual([]);
    });
    it('Test 2- n= 1, debe contener solo 0', () =>{
        expect(fabonacci(1)).toEqual([0]);
    });
    it('Test 3 - n = 10, debe de ser [0,1,1,2,3,5,8,13,21,34]',() => {
        expect(fabonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
})
