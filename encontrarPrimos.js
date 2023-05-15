function encontraPrimo(array){
    // escreve aqui a função


return array.find(n => {




    if( n <= 1){
        return false
   
 }
    for( let i= 2; i <= Math.sqrt(n); i++){
        if( n % i === 0){
            return false
        } 
        }
   
return true

})
}
