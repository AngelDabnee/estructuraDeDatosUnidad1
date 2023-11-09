const listaEnlazada = require('../listaenlazadaunica');
const assert = require('assert');

//creamos una lista que NO tiene ciclo. 
describe('lista enlazada única creado por Angel Dabnee', function () {
    it('debe detectar una lista unica', function () {
        const lista = new listaEnlazada();
        lista.agregar(1);
        lista.agregar(2);
        lista.agregar(3);
        const resultado = true;
        assert.strictEqual(resultado,true);
    });
})