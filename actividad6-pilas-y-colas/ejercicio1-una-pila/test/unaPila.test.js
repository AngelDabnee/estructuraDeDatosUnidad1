const Strack = require('../unaPila'); 

describe('Probaremos un una Pila, del ejercicio 1', () => {

  it('eliminar y obtener el elemento de la parte superior de la pila seria banana', () => {
    let stack = new Strack();
    stack.push('manzana');
    stack.push('banana');
    stack.push('naranja');
    const popElement = stack.pop();
    expect(popElement).toBe('naranja')
    expect(stack.peek()).toBe('banana');
    console.log(stack.size());
  })

  it('Aceptaremos puros Números', () => {
    let stack = new Strack();
    stack.push(1);
    stack.push(2);
    stack.push(2);
    //const popElement = stack.pop();
    //expect(popElement).toBe('naranja');
    //expect(stack.peek()).toBe('banana');
    console.log(stack.size());
  })
  it('Retornamos una Pila Vacía', () => {
    let stack = new Strack();
    //const popElement = stack.pop();
    //expect(popElement).toBe('naranja');
    //expect(stack.peek()).toBe('banana');
    console.log(stack.size());
  })
});