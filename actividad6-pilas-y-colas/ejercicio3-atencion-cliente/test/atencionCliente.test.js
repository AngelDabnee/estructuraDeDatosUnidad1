const Queue = require('../atencionCliente');

describe('Probaremos un una cola para la atención a clientes', () => {
    it('añadimos 3 clientes a la cola', () => {
        let stack = new Queue();
        stack.peek();
        stack.push('Ruben');
        stack.push('Angel');
        stack.push('Master.Cheno');
        //console.log(stack.peek());
      })
      it('Probamos eliminar el último de la cola. (sería master.cheno', () => {
        let stack = new Queue();
        stack.peek();
        stack.push('Ruben');
        stack.push('Angel');
        stack.push('Master.Cheno');
        let elementEliminado = stack.pop();
        console.log(elementEliminado);
        //console.log(stack.peek());
      })
      it('Valoramos el crear la cola de clientes y valorar que esté vacía, o sea que nunca añadamos algo ', () => {
        let stack = new Queue();
        console.log(stack.isEmpty());
        //console.log(stack.peek());
      })
});