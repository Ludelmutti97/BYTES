function somaDosQuadradosDoArray(array){
    // escreve aqui a função
    //  With Method RECURSION
   if(array.length ===0){

       return 0
   }

  const quadrado = Math.pow(array[0], 2);
  return quadrado + somaDosQuadradosDoArray(array.slice(1))
}