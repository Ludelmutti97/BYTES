function diaDaSemanaPorExtensoBilingue(data, lingua){
    // escreve aqui a função

    let dia = new Date(data).getDay()
    let diasDaSemanaPt = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    let diasDaSemanaIng = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];



    if( lingua === "pt"){
        return diasDaSemanaPt[dia]
    }

    if( lingua === "en"){
        return diasDaSemanaIng[dia]
    }
} 