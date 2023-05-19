function apresentaPessoa(nome, idade) {


    if (idade) //  idade nao igualadaa nada ou diferente, atribuida a um valor  é como verdade     
    {
        return `Ola meu  nome é ${nome} e tenho ${idade} anos.`
       
    } else {
       return `Ola meu nome é ${nome}.`  
    }




    /*Outra opção
    
    if (idade === undefined) // ** if(idade) idade nao igualadaa nada ou diferente, atribuida a um valor  é como verdade     
    {return `Ola meu nome é ${nome}.`
       
    } else {
         return `Ola meu  nome é ${nome} e tenho ${idade} anos.`
    }*/




}


console.log(
    apresentaPessoa("Claudio", 28),
"\n",
    apresentaPessoa("Rafael"),

)