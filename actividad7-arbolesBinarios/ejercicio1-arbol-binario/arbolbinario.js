// Clase que representa un nodo del árbol
class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierda = null;
      this.derecha = null;
    }
  }
  
  // Clase que representa el árbol binario
  class ArbolBinario {
    constructor() {
      this.raiz = null;
    }
  
    // Método para insertar un nuevo nodo en el árbol
    insertar(valor) {
      const nuevoNodo = new Nodo(valor);
  
      if (this.raiz === null) {
        this.raiz = nuevoNodo;
      } else {
        this.insertarNodo(this.raiz, nuevoNodo);
      }
    }
  
    // Método auxiliar para insertar un nodo en una posición específica del árbol
    insertarNodo(nodo, nuevoNodo) {
      if (nuevoNodo.valor < nodo.valor) {
        if (nodo.izquierda === null) {
          nodo.izquierda = nuevoNodo;
        } else {
          this.insertarNodo(nodo.izquierda, nuevoNodo);
        }
      } else {
        if (nodo.derecha === null) {
          nodo.derecha = nuevoNodo;
        } else {
          this.insertarNodo(nodo.derecha, nuevoNodo);
        }
      }
    }
    // Método para buscar un valor en el árbol
    buscar(valor) {
        return this.buscarNodo(this.raiz, valor);
    }

    // Método auxiliar para buscar un nodo con un valor específico en el árbol
    buscarNodo(nodo, valor) {
        if (nodo === null || nodo.valor === valor) {
        return nodo;
        }

        if (valor < nodo.valor) {
        return this.buscarNodo(nodo.izquierda, valor);
        } else {
        return this.buscarNodo(nodo.derecha, valor);
        }
    }
      // Método para verificar si el árbol está vacío
      estaVacio() {
        return this.raiz === null;
     }

  // Método para verificar si es una instancia de ArbolBinario
      esInstanciaDeArbolBinario(obj) {
        return obj instanceof ArbolBinario;
    }
  
  }
  
module.exports= ArbolBinario;

  // Ejemplo de uso
  const arbol = new ArbolBinario();
  arbol.insertar(5);
  arbol.insertar(3);
  arbol.insertar(7);
  arbol.insertar(2);
  arbol.insertar(4);
  arbol.insertar(6);
  arbol.insertar(8);
  
  console.log(arbol);