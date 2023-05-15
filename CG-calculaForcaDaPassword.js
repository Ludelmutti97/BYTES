function calculaForcaDaPassword(string) {
    // Escreve aqui o teu código
let pontuacaoMax= 0
if(string.length >=8 ){
pontuacaoMax +=1
}
if(string.length === 0){
       return "Por favor introduza uma password válida."
    }

for( let i= 0; i < string.length ; i++){
    if(typeof string[i] == "number") {
        pontuacaoMax += 1
         
}

 if(string[i] === string[i].toUpperCase()){
     pontuacaoMax += 1
 }

}  
 return pontuacaoMax
}