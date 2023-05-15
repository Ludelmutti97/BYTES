function arrayDeNAZero(n){
    // escreve aqui a função

    if( n < 0){
        return "Por favor insira um número superior a 0."
    }
  let contador= []
   for( let i=n; i >=0 ; i--){
       contador.push(i)

   }
   return contador
  
}
