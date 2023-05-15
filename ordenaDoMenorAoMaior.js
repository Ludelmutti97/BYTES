function ordenaDoMenorAoMaior(array){
    // escreve aqui a função

     const newArray = array.slice()

     newArray.sort(function ordena(a,b)
     {
         return a -b
     })
     return newArray
     
}

// outra forma

function ordenaDoMenorAoMaior(array){
    // escreve aqui a função

     const newArray = array.slice()

    function ordena(a,b)
     {
         return a -b
     }

     return newArray.sort(ordena)
     
}
