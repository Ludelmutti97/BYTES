//Números BigInt 
//somar, subtrair, multiplicar, dividir

class Calculadora {
    constructor() {
        this.historico = []
        this.resultado = 0
    }

    somar(a, b) {
        let valor1 = a
        let valor2 = b

        if (valor2 === undefined) {
            valor2 = valor1
            valor1 = this.resultado
        }

        let res = BigInt(valor1) + BigInt(valor2)
        this.resultado = res

        this.historico.push(`${valor1} + ${valor2} = ${res}`)

        return this
    }

    subtrair(a, b) {
        let valor1 = a
        let valor2 = b
        if (valor2 === undefined) {
            valor2 = valor1
            valor1 = this.resultado
        }

        let res = BigInt(valor1) - BigInt(valor2)
        this.resultado = res

        this.historico.push(`${valor1} - ${valor2} = ${res}`)
        return this


    }

    multiplicar(a, b) {

        let valor1 = a
        let valor2 = b
        if (valor2 === undefined) {
            valor2 = valor1
            valor1 = this.resultado

        }

        let res = BigInt(valor1) * BigInt(valor2)
        this.resultado = res


        this.historico.push(`${valor1} * ${valor2} = ${res}`)

        return this

    }

    dividir(a, b) {
        let valor1 = a
        let valor2 = b
        if (valor2 === undefined) {
            valor2 = valor1
            valor1 = this.resultado

        }

        if (valor2 === 0){
            return undefined
        }

        let res = BigInt(valor1) / BigInt(valor2)
        this.resultado = res

        this.historico.push(`${valor1} / ${valor2} = ${res}`)
        return this
    }

    limparHistorico() {
        this.historico = []
        this.resultado = 0

        return this
    }

    obterResultado() {
        return this.resultado



    }

    toJSON() {
        const obj = {
            historico: this.historico, 
            ultimoResultado: this.resultado.toString()
        }

        const objJson = JSON.stringify(obj)
        const objJson2 = JSON.parse(objJson)
        
        return objJson2


    }

    toString() {
        if (this.historico.length === 0) {
            return "Calculadora Limpa";

        } else {
                return `=== Histórico da Calculadora ===
${this.historico.map((el, i) => i + 1 + ". " + el).join("\n")}
=== Fim do Histórico ===
Foram realizadas ${this.historico.length} operações
Último Resultado: ${this.obterResultado()}`;
        }
    }
}