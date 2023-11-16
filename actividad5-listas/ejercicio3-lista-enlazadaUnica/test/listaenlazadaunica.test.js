const listaEnlazada = require('../listaenlazadaunica');
const assert = require('assert');

describe('lista enlazada única creado por Angel Dabnee', function () {
    it('debe detectar una lista unica', function () {
        const lista = new listaEnlazada();
        lista.agregar(1);
        lista.agregar(2);
        lista.agregar(3);
        const resultado = true;
        assert.strictEqual(resultado,true);
    });
    it('No debe detectar una lista unica', function () {
        const lista = new listaEnlazada();
        lista.agregar(2);
        lista.agregar(5);
        lista.agregar(7);
        const resultado = false;
        assert.strictEqual(resultado,false);
    });
    it('Es ciclica', function () {
        const lista = new listaEnlazada();
        lista.agregar(1);
        lista.agregar(2);
        lista.agregar(3);
        const resultado = false;
        assert.strictEqual(resultado,false);
    });
})