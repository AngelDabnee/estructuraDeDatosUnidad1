const ArbolBinario = require('../arbolBinarioMetodoMover'); 
const assert = require('chai').assert;


describe('Probamos el método para eliminar un nodo del arbol binario', () => {

  it('Realizaremos el insert de elementos al arbol y el 3 lo moveremos a la posición 6.  ', () => {
    const arbol = new ArbolBinario();
    arbol.insertar(5);
    arbol.insertar(3);
    arbol.insertar(8);
    arbol.insertar(2);
    arbol.insertar(4);
    arbol.insertar(7);
    arbol.insertar(9);
    arbol.mover(3,6);

    console.log(arbol);
  })
  it('Realizaremos el movimiento de posición 7 a 1 .  ', () => {
    const arbol = new ArbolBinario();
    arbol.insertar(5);
    arbol.insertar(3);
    arbol.insertar(8);
    arbol.insertar(2);
    arbol.insertar(4);
    arbol.insertar(7);
    arbol.insertar(9);
    arbol.mover(7,1);

    console.log(arbol);
  })
  it('Haremos el movimiento de la posición 9 a la 1 .  ', () => {
    const arbol = new ArbolBinario();
    arbol.insertar(5);
    arbol.insertar(3);
    arbol.insertar(8);
    arbol.insertar(2);
    arbol.insertar(4);
    arbol.insertar(7);
    arbol.insertar(9);
    arbol.mover(9,1);

    console.log(arbol);
  })
  it('Instancia de la clase a probar ', () => {
    let arbolBinario = new ArbolBinario();
    assert.isTrue(arbolBinario.estaVacio());
  })
})