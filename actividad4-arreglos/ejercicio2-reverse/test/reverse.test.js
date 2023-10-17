import { revertir } from "../reverse"
describe('Suite de pruebas para la función de reverse()',() =>{
    beforeAll(() =>{
        console.info('Autor: Hecho por Angel Dabnee');
    })
    it('debería revertir una angel por legna',() => {
        const string = "angel";
        expect(revertir(string)).toEqual("legna");
    });
    it('debería revertir una hola por aloh',() => {
        const string = "hola";
        expect(revertir(string)).toEqual("aloh");
    });
});