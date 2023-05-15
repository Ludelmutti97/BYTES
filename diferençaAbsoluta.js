function diferencaAbsolutaEntreDiagonais(matrizquadrada) {
    // escreve aqui a função

  

    let tamanho = matrizquadrada.length;
    let diagonalEsq = 0;
    let diagonalDir = 0;

    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho; j++) {
        
        if (i === j) {
            diagonalEsq += matrizquadrada[i][j];
        }
        
        if (i + j === tamanho - 1) {
            diagonalDir += matrizquadrada[i][j];
        }
        }
    }

    return Math.abs(Math.abs(diagonalEsq) - Math.abs(diagonalDir));
}