function produtoExclusivo(array) {
    // Escreve aqui a função

   let novoArray = [];

    for(let i = 0; i < array.length; i++){
        
        let multiplicacao = 1 //Para nao multiplicar por 0 e também para colocar um novo elemento no push, o elemento da multiplicacao
        for(let j = 0; j < array.length; j++){
            
            //para fazer o loop novamente e a comparação entre o mesmo número. Só entra na condição caso o número seja diferente. Então o total recebe ele mesmo que é 1 (para fins de multiplicação e o próximo elemento, que não o igual.)
            if(j !== i){
                multiplicacao = multiplicacao * array[j]
            }
        }
        novoArray.push(multiplicacao);
    }
    return novoArray;
  

    
}