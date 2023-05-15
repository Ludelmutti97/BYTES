function escadaComCardinais(n){
let escada = ""

for( let i=1; i <= n; i++){

    escada+="// "+ " ".repeat(n-1) + "#".repeat(i)+"\n"; // adicionando espaco e repetindo o n-1 e adicionando o # e quando muda adiciona mais #



    console.log(escada)

}

}
escadaComCardinais(8)

/*--------------------------------------------------
option 1
Utilizando Array e puxando e declarando o espaço
function escadaComCardinais(n){
    let escada = []
    
    for( let i=0; i <= n; i++){
        let espaco = n - i;
        escada.push(" ".repeat(espaco) + "#".repeat(i)+"\n");
    
    
    
        console.log(escada)
    
    }
    
    }
    escadaComCardinais(8)
--------------------------------------    

option 2
function escadaComCardinais(n){
    let escada = "";
    
    for( let i= 0; i < n ; i++){
        const espaco = n - 1 - i
        const quantidade = 1 + i
        escada += criarString(espaco, "_")
        escada += criarString(quantidade,"#")
        escada += i < n - 1 ? "\n" : ""
   
    
    
    }
     return escada

     console.log(escada)
    }
    escadaComCardinais(6)*/

