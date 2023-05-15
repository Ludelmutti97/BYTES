function diaDoAno(data){
    // escreve aqui a função
    const inicio = new Date(data.getFullYear(),0,0)
    let soma =  data - inicio

    let diaEmMs = 24*60*60*1000
    let dia = Math.floor( soma / diaEmMs)
    return dia 
}
