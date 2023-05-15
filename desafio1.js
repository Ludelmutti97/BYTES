function adicionarJogada(jogo,jogador,linha,coluna){
 
    const novoJogo= {...jogo}
    let posicao;
    
    posicao = novoJogo.tabuleiro[linha][coluna]
     if( posicao === " "){
     posicao = jogador
     }
    
     return novoJogo
    }
    
    
    function obterJogadasPossiveis(jogo){
     const novoArray =[]
     for(let linha = 0; linha < jogo.tabuleiro.length; linha++){
         for( let coluna = 0; coluna < jogo.tabuleiro.length; coluna++){
             if(jogo.tabuleiro[linha][coluna].includes(" ")){
                 novoArray.push({
                     linha: linha,
                     coluna: coluna
                 })
                  
    
             }
         }
     }
    
    return novoArray
    
    }
    
    function verificarVencedor(jogo){
     
    for( let linha =0; linha < 9; linha += 3)
    
     
    
    
    }