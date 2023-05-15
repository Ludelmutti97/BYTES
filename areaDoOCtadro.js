function calculaAreaSuperficieOctaedro(aresta) {
    // Escreve aqui o teu código


    if( aresta <=0){

        return "Por favor insira um valor positivo."
    }
let area = 2*aresta**2*Math.sqrt(3)
return Math.round( area)
}
