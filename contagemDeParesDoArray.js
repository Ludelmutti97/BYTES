function contaParesDoArray(array){
    // escreve aqui a função
   
if( array.length ===0){
    return 0
}
let contagemPares= 0
if(array[array.length-1] % 2===0){
    contagemPares ++
}
 return contagemPares +contaParesDoArray(array.slice(0, array.length-1))

}