function mapaDeOcorrencias(array){
    // escreve aqui a função

    const arrayDeValores =array

return arrayDeValores.reduce((mapaDeOcorrencias, elemento) =>{
    
    if(mapaDeOcorrencias.has(elemento)){
    return new Map([ ...mapaDeOcorrencias,
        [ elemento , mapaDeOcorrencias.get(elemento)+ 1]])
    }else{
        return new Map([ ...mapaDeOcorrencias,
            [elemento,1]])
    }
}, new Map([]))

}