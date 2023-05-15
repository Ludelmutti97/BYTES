function numeroTrilingue(n, lingua) {
    // Escreve aqui o teu código
    
    const numeroPt = {
        0: "zero",
        1: "um",
        2: "dois",
        3: "três",
        4: "quatro",
        5: "cinco",
        6: "seis",
        7: "sete",
        8: "oito",
        9: "nove",
        10: "dez"
    }

    const numeroEn = {
       0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten"
    }
    
    const numeroFr= {
       0: "zéro",
        1: "un",
        2: "deux",
        3: "trois",
        4: "quatre",
        5: "cinq",
        6: "six",
        7: "sept",
        8: "huit",
        9: "neuf",
        10: "dix"

    }

    if(lingua === "pt"){
        return numeroPt[n]
    }

    if(lingua === "en"){
        return numeroEn[n]
    }
    if( lingua === "fr"){
        return numeroFr[n]
    }
}