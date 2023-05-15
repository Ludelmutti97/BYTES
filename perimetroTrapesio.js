function perimetroDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
    // escreve aqui a função
let x = (comprimentoMaior-comprimentoMenor) /2
let y= Math.sqrt((x**2)+(altura**2))
    return comprimentoMaior+comprimentoMenor+ 2 *y
}