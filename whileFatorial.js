function fatorialN(n){
    // escreve aqui a função
let fatorial = BigInt(n)
   if( n ===0 || n===1){
       return 1
   }
    while(n > 1){
        n--;
        fatorial *= BigInt(n)
    }

   
   return fatorial
}
console.log(fatorialN(238))