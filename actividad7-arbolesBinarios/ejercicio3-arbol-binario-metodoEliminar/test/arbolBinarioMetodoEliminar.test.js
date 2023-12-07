const ArbolBinario = require('../arbolBinarioMetodoEliminar'); 
const assert = require('chai').assert;


describe('Probamos el método para eliminar un nodo del arbol binario', () => {

  it('Realizamos la busqueda dentro del arbol del elemento existente y este mismo lo eliminaremos.  ', () => {
    const arbol = new ArbolBinario();
    arbol.insertar(1);
    arbol.insertar(2);
    arbol.insertar(3);
    arbol.insertar(4);
    const nodoBusqueda = arbol.buscar(3);
    if (nodoBusqueda) {
        console.log(`Nodo encontrado con valor ${nodoBusqueda.valor}`);
      } else {
        console.log('Nodo no encontrado');
      }
    const nodoEliminar = arbol.eliminar(3);
  })
  it('Realizamos la busqueda dentro del arbol de diferentes elementos y estos mismos los eliminaremos.  ', () => {
    const arbol = new ArbolBinario();
    arbol.insertar(1);
    arbol.insertar(2);
    arbol.insertar(3);
    arbol.insertar(4);
    arbol.insertar(5);
    arbol.insertar(6);
    arbol.insertar(7);
    arbol.insertar(8);
    const nodoBusqueda = arbol.buscar(3,5,6,7,8);
    if (nodoBusqueda) {
        console.log(`Nodo encontrado con valor ${nodoBusqueda.valor}`);
      } else {
        console.log('Nodo no encontrado');
      }
    const nodoEliminar = arbol.eliminar(3,5,6,7,8);
  })
  it('Realizamos la busqueda de char dentro del arbol de diferentes elementos y estos mismos los eliminaremos.  ', () => {
    const arbol = new ArbolBinario();
    arbol.insertar('a');
    arbol.insertar('s');
    arbol.insertar('x');
    arbol.insertar('f');
    arbol.insertar('e');
    arbol.insertar('g');
    arbol.insertar('t');
    arbol.insertar('l');
    const nodoBusqueda = arbol.buscar('x');
    if (nodoBusqueda) {
        console.log(`Nodo encontrado con valor ${nodoBusqueda.valor}`);
      } else {
        console.log('Nodo no encontrado');
      }
    const nodoEliminar = arbol.eliminar('x');
  })
  it('Instancia de la clase a probar ', () => {
    let arbolBinario = new ArbolBinario();
    assert.isTrue(arbolBinario.estaVacio());
  })
})