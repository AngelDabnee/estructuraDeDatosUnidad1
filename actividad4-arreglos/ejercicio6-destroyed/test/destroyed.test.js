import { destroyed } from "../destroyed";

describe('Suite de pruebas para la función obtener el unico elemento que no se repite en dos arreglos', () => {
  beforeAll(() => {
    console.info('Autor: Hecho por Angel Dabnee');
  });
  it('debería eliminarme los elementos 2 y 4 de mi arreglo',()=>{
    const arr = [1,2,3,4,5];
    const resultado = destroyed(arr );
    expect(resultado).toEqual([1,3,5]);
  });
});
