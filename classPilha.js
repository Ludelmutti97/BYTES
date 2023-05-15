class Pilha {
    

    constructor(capacidade) {
        this.pilha = []
        this.capacidade =capacidade

    }

    adicionar(elem) {

        
        if(this.pilha.length >= this.capacidade ){
            return "Pilha cheia!"
        }

        this.pilha.push(elem)
    }


    remover() {
        if (this.pilha.length === 0) {

            return "Pilha vazia!"
        }
        this.pilha.pop()
    }

    obterValor() {
        if (this.pilha.length === 0) {
            return "Pilha vazia!"

        }
        return this.pilha[this.pilha.length-1]
    }
}

