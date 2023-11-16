const Queue = require('../unaCola'); 

describe('Probaremos un una Pila, del ejercicio 1', () => {

  it('eliminar y obtener el elemento de la parte superior de la pila seria angel', () => {
    let stack = new Queue();
    stack.push('Ruben');
    stack.push('Angel');
    stack.push('Master.Cheno');
    stack.push('Jorge');
    stack.push('Angel');
    //eliminaré y daré el primero
    let elementEliminado = stack.pop();
    console.log(elementEliminado);
  })
  it('Imprimiremos los elementos de la lista, serán 6', () => {
    let stack = new Queue();
    stack.push('Ruben');
    stack.push('Dan');
    stack.push('Angel');
    stack.push('Master.Cheno');
    stack.push('Jorge');
    stack.push('Angel');
    console.log(stack.size());
  })
  it('Verificaremos si la cola está vacía', () => {
    let stack = new Queue();
    console.log(stack.peek());
  })
});