const Stack = require('../pilaDePlatos'); 

describe('Probaremos un una Pila, en un ejercicio de pila de platos', () => {

  it('Nos agrega elementos a la Pila', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.print();
    expect(stack.size()).toBe(3);
  })
  it('Eliminaremos Elementos de la Pila', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    const popElement = stack.pop();
    expect(popElement).toBe(3);
    stack.print();
    expect(stack.size()).toBe(2);
  })
  it('Eliminaremos el elemento último añadido (Dan)', () => {
    let stack = new Stack();
    stack.push('Angel');
    stack.push('Ivan');
    stack.push('Jorge');
    stack.push('Pedro');
    stack.push('Dan');
    const popElement = stack.pop();
    expect(popElement).toBe('Dan');
    stack.print();
    expect(stack.size()).toBe(4);
  })
  it('Suponiendo que está vacía después añadimos y damos los elementos. ', () => {
    let stack = new Stack();
    stack.peek();
    stack.push('plato1');
    stack.push('plato2');
    stack.push('plato3');
    stack.push('plato4');
    stack.push('plato5');
    stack.peek();
    stack.print();
    expect(stack.size()).toBe(5);
  })

});