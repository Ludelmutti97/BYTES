function transformaParesEmMaiusculas(array){
	if(array.length === 0){
		return "Por favor insira um array não vazio."
	}

let pares = []

	for(let i = 0; i < array.length; i++){
		if(i % 2 === 0){
    pares.push(array[i])
		}
	}

let maiusculas = []

	for(let i = 0; i < pares.length; i++){
		if(pares[i].length % 2 === 0){
    maiusculas.push(pares[i].toUpperCase())
		}
  }

return maiusculas

}