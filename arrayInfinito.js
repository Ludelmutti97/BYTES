function arrayInfinito(array, esquerda, direita) {
    // Escreve aqui a função

    if( array === undefined || array.length === 0){

        return 0
    }
 
    let newArray = array
    let soma = 0
    let clonarXVezes = Math.ceil(direita / array.length)


    for (let i = 0; i < clonarXVezes; i++) {
        newArray = newArray.concat(array)
    }

    for (let i = esquerda; i <= direita; i++) {
        soma += newArray[i]
    }
    return soma
}


