function calculaModa(array){
    // escreve aqui a função
    let frequencias = new Map()
    let maxFrequencia = 0
    let moda =[]
   
    for(let i = 0; i < array.length; i++){
        let numero = array[i]
        const contagem = frequencias.has(numero) ? frequencias.get(numero) : 0
        frequencias.set(numero, contagem + 1)
        console.log(frequencias)
    if(contagem + 1 > maxFrequencia ){
        maxFrequencia = contagem + 1
        console.log(maxFrequencia)
        moda = [numero]
    } else if (maxFrequencia === contagem + 1){
        moda.push(numero)
    }
}

return Math.min(...moda)
}

const arar = [1,6,2,6,2,2,8,6,6,2,6,2]
console.log(calculaModa(arar))