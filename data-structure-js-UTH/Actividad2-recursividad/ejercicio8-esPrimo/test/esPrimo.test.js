import { esPrimo } from "../esPrimo"
describe('Suite de pruebas para la función de esPrimo()',() =>{
    beforeAll(() =>{
        console.info('Autor: Hecho por Angel Dabnee');
    })
    it('2 debe ser primo',()=>{
        expect(esPrimo(2)).toBe((true))
    })
    it('3 no debe de ser primo',()=>{
        expect(esPrimo(3)).toBe((true))
    })
});