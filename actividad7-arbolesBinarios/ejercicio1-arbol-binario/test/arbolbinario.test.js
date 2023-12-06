const ArbolBinario = require('../arbolbinario'); 
const assert = require('chai').assert;

describe('Probaremos que se añadan elementos al arbol binario', () => {

  it('Agregaremos elementos al Arbol. ', () => {
    let arbolBinario = new ArbolBinario();
    arbolBinario.insertar(1);
    arbolBinario.insertar(2);
    arbolBinario.insertar(4);
  })
  it('Agregaremos Elemenos al nodo. ', () => {
    let arbolBinario = new ArbolBinario();
    arbolBinario.insertar(1);
    arbolBinario.insertar(2);
    arbolBinario.insertar(3);
    arbolBinario.insertar(4);
    arbolBinario.insertar(5);
    arbolBinario.insertar(6);
    arbolBinario.insertar(7);
    arbolBinario.insertar(8);
    arbolBinario.insertar(9);
  })
  it('Probamos que reciba caracteres alfabéticos. ', () => {
    let arbolBinario = new ArbolBinario();
    arbolBinario.insertar('a');
    arbolBinario.insertar('s');
    arbolBinario.insertar('d');
    arbolBinario.insertar('f');
    arbolBinario.insertar('g');
    arbolBinario.insertar('h');
    arbolBinario.insertar('t');
    arbolBinario.insertar('e');
    arbolBinario.insertar('w');
  })
  it('Probamos que este vacío ', () => {
    let arbolBinario = new ArbolBinario();
    assert.isTrue(arbolBinario.estaVacio());
  })
  it('Instancia de la clase a probar ', () => {
    let arbolBinario = new ArbolBinario();
    assert.isTrue(arbolBinario.estaVacio());
  })

})