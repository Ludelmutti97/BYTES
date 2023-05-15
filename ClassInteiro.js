class Inteiro {
    // completa a classe
    #valor 

    constructor(valor) {

        if (typeof valor === "number" && typeof valor !== "undefined") {
            this.#valor = Math.floor(valor)
        }else{
            this.#valor = 0
        }
    }


    get valor() {
        return this.#valor
    }

}

/// OUTRO EXEMPLO COM SET 

class Inteiro {
    // completa a classe

     #inteiro
    constructor(inteiro) {
        this.#inteiro = typeof inteiro === 'number' ? Math.floor(inteiro) : 0
    }

    get valor() {
        return this.#inteiro
    }
    set valor(nv) {
        if (Number.isNaN(Number(nv))) {
            this.#inteiro = this.#inteiro ? this.#inteiro : nv;
        } else {
            this.#inteiro = Math.floor(nv);
        }
    }
}