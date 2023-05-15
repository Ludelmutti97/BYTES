
   

    function diaDaSemanaPorExtenso(data){
        // escreve aqui a função
    
        const dias = {
            0: "domingo",
            1: "segunda-feira",
            2: "terça-feira",
            3: "quarta-feira",
            4: "quinta-feira",
            5: "sexta-feira",
            6: "sábado"
        }
    
    
        const dia = data.getDay()
    
        return dias[dia]
    } 
       
    