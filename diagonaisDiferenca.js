
/*
//Encontrar o min e max ordenado
function minMax(array,n){

    let min=0
    let max= 0

   const res =array.sort((a,b) => a-b)

    for(let i=0; i< n; i++){
        min += array.ordenado[i]

    }

    for(let i=array.length-1; i>= array.length - n; i--){
        max += array.ordenado[i]

    }

    return [min, max]

}

minMax([1,2,3,4,5],4)

minMax([1,2,3,4,5],2)*/


// Difereça diagonal de uma matriz com array

function diferencaDiagonal(matriz){

    let diagonalPrincipal =0;
    let diagonalSecundaria  =0;

for(let i=0 ; i< matriz.length; i++){
const linha= matriz[i]

const valorDaDiagonalPrincipal = linha[i]
const valorDaDiagonalSecundaria =linha[linha.length- 1 - i]

diagonalPrincipal += valorDaDiagonalPrincipal
diagonalSecundaria += valorDaDiagonalSecundaria
 const  diferenca= diagonalPrincipal - diagonalSecundaria
return diferenca
}

diferencaDiagonal([
[3, 3, 3],
[4, 8, 9],
[1, 8, 9]

])
}
/*Cria uma função que recebe um array de duas dimensões, 
uma matriz quadrada como argumento e calcula a soma de todos
 os elementos da diagonal secundária (começa no canto superior
direito e termina no canto inferior esquerdo).*/


function somaDiagonalSecundaria(matriz) {
    let soma = 0;
    const tamanho = matriz.length;
  
    for (let i = 0; i < tamanho; i++) {
      soma += matriz[i][tamanho - i - 1];
    }
  
    return soma;


}


