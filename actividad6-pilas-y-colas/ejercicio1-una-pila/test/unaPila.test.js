const Strack = require('../unaPila'); 

describe('Probaremos un una Pila, del ejercicio 1', () => {

  it('Probamos que exista la pila y además que la recibamos vacía. ', () => {
    let stack = new Strack();
    //expect(stack.isEmpty()).toBe(true);
    console.log(stack.isEmpty());
    //stack.push('manzana');
    //console.log(stack);
    /*Sstack.push('banana');
    stack.push('naranja');
    const popElement = stack.pop();
    expect(popElement).toBe('naranja')
    expect(stack.peek()).toBe('banana');*/
  })

  it('Aceptaremos puros Números', () => {
    let stack = new Strack();
    stack.push(1);
    stack.push(2);
    stack.push(2);
    //const popElement = stack.pop();
    //expect(popElement).toBe('naranja')
    const stackArray = stack.obtenerValor();
    console.log(stackArray);
  })
  it('Retornamos una Pila Vacía', () => {
    let stack = new Strack();
    //const popElement = stack.pop();
    //expect(popElement).toBe('naranja');
    //expect(stack.peek()).toBe('banana');
    const stackarrays = stack.obtenerValor();
  })
  it('Probamos la implementación de un "get"', () => {
    const myStack = new Strack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    
    const stackArray = myStack.obtenerValor();
    console.log(stackArray); // Esto imprimirá la
  })
  
});