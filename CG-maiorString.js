//Usando Sort

function maiorString(array){

    let max = array.sort(function(a,b){

return b.length - a.length

    })

}

return max[0]


// Usando FOR(loop)

function maiorString(array){



let maior=""

for( let i=0; i< array.length; i++){
 if( maior.length < array[i].length){
    maior= array[i]
 }

}

return maior
}