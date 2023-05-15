function arrayFromBigInt(number){
    return  String(number).split('').map(ele => Number(ele))
  


}

// 
function filtraStrings(array) {
    // Escreve aqui o teu código



  //return String(array.length).split('').filter(ele => !Number(ele))

let novo= array.filter(ele => ele.length  + 1)
return novo
 
  //array.filter(ele => typeof ele === 'string')
  
 
     
}


