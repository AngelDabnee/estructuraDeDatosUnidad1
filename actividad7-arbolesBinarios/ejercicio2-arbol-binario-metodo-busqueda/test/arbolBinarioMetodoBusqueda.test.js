const ArbolBinario = require('../arbolBinarioMetodoBusqueda'); 
const assert = require('chai').assert;


describe('Probaremos que podamos realizar una busqueda de elementos al arbol binario', () => {

  it('Realizamos la primera busqueda de un elementos del Arbol. ', () => {
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
  })
  it('Realizamos una busqueda de un elemento no existente. ', () => {
    const arbol = new ArbolBinario();
    arbol.insertar(3);
    arbol.insertar(1);
    arbol.insertar(5);
    arbol.insertar(8);
    const nodoBusqueda = arbol.buscar(9);
    if (nodoBusqueda) {
        console.log(`Nodo encontrado con valor ${nodoBusqueda.valor}`);
      } else {
        console.log('Nodo no encontrado');
      }
  })
  it('Realizamos la busqueda de caracteres alfabéticos. ', () => {
    const arbol = new ArbolBinario();
    arbol.insertar('a');
    arbol.insertar('b');
    arbol.insertar('c');
    arbol.insertar('d');
    const nodoBusqueda = arbol.buscar('a');
    if (nodoBusqueda) {
        console.log(`Nodo encontrado con valor ${nodoBusqueda.valor}`);
      } else {
        console.log('Nodo no encontrado');
      }
  })
  it('Instancia de la clase a probar ', () => {
    let arbolBinario = new ArbolBinario();
    assert.isTrue(arbolBinario.estaVacio());
  })


})