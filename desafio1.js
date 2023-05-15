function converteHacker(string) {
    // Escreve aqui o teu código


/*OPÇAO 1 COM SWITCH CASE
let newString = ""
for( let i=0;  i < string.length; i++ ){
switch(string[i]){

     case 'a':
      case 'A':
      newString += '4';
        break;
      case 'e':
      case 'E':
      newString += '3';
        break;
      case 'i':
      case 'I':
      newString += '1';
        break;
      case 'o':
      case 'O':
      newString += '0';
        break;
      case 's':
      case 'S':
    newString+= '5';
        break;
      default:
      newString += string[i];
      break;
    }
  }
  return newString;



}*/


/*OPÇÃO 2 COM IF

let newString = ""
for( let i=0;  i < string.length; i++ ){
    const caracter = string[i]
 if(caracter === "a"|| caracter ==="A"){
    newString += "4"
    continue
 }
 if(caracter === "e"|| caracter ==="E"){
    newString += "3"
    continue
 }
 if(caracter === "i"|| caracter ==="I"){
    newString += "1"
    continue
 }
 if(caracter === "o"|| caracter ==="O"){
    newString += "0"
    continue
 }
 if(caracter === "s"|| caracter ==="S"){
    newString += "5"
    continue
 }
}
return newString += caracter}*/


//OPÇÃO 3 COM REPLACE

 return string.replace("a","4")//Ou (/(A|a)/g, "4")
 .replace("A","4") 
 .replace("s","5")//Ou (/(S|s)/g, "5")
 .replace("S","5")
 .replace("e","3")//Ou (/(E|e)/g, "3")
 .replace("E","3")
 .replace("i","1") //Ou (/(I|i)/g, "1")
 .replace("I","1");
}


// OPÇAO COM MAPA



