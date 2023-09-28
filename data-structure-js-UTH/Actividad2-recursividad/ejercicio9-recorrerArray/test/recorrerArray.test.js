import { recorrerArray } from '../recorrerArray'

describe('Suite de pruebas para la función de recorrerArray ()', () => {
    beforeAll(() =>{
        console.info('Autor: Hecho por Angel');
    });
    
    it('Debe recorrer el array y mostrar los elementos',()=>{
        const miArray = ['algo'];
        recorrerArray(miArray);
    });
    it('Debe recorrer el array y mostrar los elementos',()=>{
        const miArray = ['algo tranki'];
        recorrerArray(miArray);
        
    });
})