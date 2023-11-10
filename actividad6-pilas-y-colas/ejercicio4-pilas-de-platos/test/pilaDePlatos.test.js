const Stack = require('../pilaDePlatos'); 

describe('Probaremos un una Pila, en un ejercicio de pila de platos', () => {

  it('Nos agrega elementos a la Pila', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size()).toBe(3);
  })
  it('Eliminaremos Elementos de la Pila', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    const popElement = stack.pop();
    expect(popElement).toBe(3);
    expect(stack.size()).toBe(2);
  })

});