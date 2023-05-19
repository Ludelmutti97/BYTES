function calculaAreaSuperficiePiramidePentagonal(ladodabase, altura) {
    // Escreve aqui o teu código

    if( ladodabase < 0 || altura < 0){
        return "Por favor introduza valores positivos."
    }


 let apotema = Math.sqrt(Math.pow(altura,2)+Math.pow(ladodabase/(2*Math.tan(Math.PI/5)),2));
 let areaTr = (5*Math.pow(ladodabase,2))/(4*Math.tan(Math.PI /5))



 let  areaLateral = (5*ladodabase*apotema) /2

    let areaTotal = areaTr + areaLateral

    return Math.round(areaTotal)

}
