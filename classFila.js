
/*
Implementa a classe  Fila, lembra-te que deve seguir as regras Frist in, Frist out.

A classe deve ter três métodos:

.adicionar, recebe um elemento como argumento e insere-o na Fila.
.remover, remove o elemento da frente da Fila, caso a Fila esteja vazia, retorna 
.Fila vazia: ObterElemento, retorna o elemento que esteja na frente da Fila, caso a Fila esteja vazia, retorna "Fila vazia" 
*/



class Fila {

    constructor() {
        this.fila = []

    }

    adicionar(ele) {

        this.fila.push(ele)

    }


    remover() {
        if (this.fila.length === 0) {

            return "Fila vazia!"
        }
        return this.fila.shift()
    }

    obterElemento() {
        if (this.fila.length === 0) {
            return "Fila vazia!"

        }
        return this.fila[0]
    }
}
