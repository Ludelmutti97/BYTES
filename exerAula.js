palavraExisteEmSopaDeLetras([
    "OOO",
    "LLO",
    "AYY"

], "OLA") //true

function palavraExisteEmSopaDeLetras(array,palavra){


for (let i = 0; i < array.length; i++) {
      const linha = array[i]

      if(linha.includes(palavra)){
         return true
      }
    }

for( let coluna=0; coluna < array.length; coluna++){
    let somaDasLetrasDaColuna = ""
for (let linha = 0; linha < array.length; linha++) {
       let coluna = 0
       somaDasLetrasDaColuna +=array[linha][coluna]
        
        if(somaDasLetrasDaColuna.includes(palavra)){
           return true
 
        }
    }
   
} return false

}