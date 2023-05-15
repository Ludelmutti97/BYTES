

class Mapa {
    constructor() {
        this.mapa = []
    }

    set(chave, valor) {
        if (this.has(chave)) {
            this.delete(chave)
        }
        this.mapa.push(new ChaveValor(chave, valor))
    }

    has(chaveASerEncontrada) {
        const resultado = this.mapa.find(parChaveValor => parChaveValor.chave === chaveASerEncontrada)

        if (resultado === undefined) {
            return false
        }

        return true
    }

    get(chaveASerEncontrada) {

        const resultado = this.mapa.find(parChaveValor => parChaveValor.chave === chaveASerEncontrada)

        if (resultado !== undefined) {
            return resultado.valor
        }

        return resultado
    }

    clear() {
        this.mapa = []
    }

    delete(chaveASerRemovida) {

        const resultado = this.mapa.filter(parChaveValor => parChaveValor.chave !== chaveASerRemovida)
        this.mapa = resultado
    }
}

class ChaveValor {
    constructor(chave, valor) {
        this.chave = chave
        this.valor = valor
    }
}

/*
const mapa = new Mapa()
mapa.set("assaf", 3)
mapa.delete("a")

mapa.delete("assaf")



mapa.set("c", "d");
mapa.set("c", "g");
mapa.set("e", "f");
console.log(
    mapa.get("c") //"b"
)*/