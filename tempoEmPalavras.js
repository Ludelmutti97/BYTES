function tempoEmPalavras(h, m) {
  const horas = [
      "meia noite",
      "uma",
      "duas",
      "três",
      "quatro",
      "cinco",
      "seis",
      "sete",
      "oito",
      "nove",
      "dez",
      "onze",
      "meio dia",
  ];

  const mins = [
      "em ponto",
      "um",
      "dois",
      "três",
      "quatro",
      "cinco",
      "seis",
      "sete",
      "oito",
      "nove",
      "dez",
      "onze",
      "doze",
      "treze",
      "catorze",
      "um quarto",
      "dezasseis",
      "dezassete",
      "dezoito",
      "dezanove",
      "vinte",
      "vinte e um",
      "vinte e dois",
      "vinte e três",
      "vinte e quatro",
      "vinte e cinco",
      "vinte e seis",
      "vinte e sete",
      "vinte e oito",
      "vinte e nove",
      "meia",
  ];

  let horasPorExtenso; // variavel para guardar as h por extenso
  let minutoPorExtenso = mins[m]; // variavel para guardar o index dos minutos menores ou igual a 30
  let minInvert = mins.reverse()[m - mins.length + 1]; // variavel para tratar minutos maiores que 30

  if (h >= 0 && h < 24 && m >= 0 && m < 60) {
      // condiçao que verifica se horas estao entre 0 e 23 e minutos entre 0 e 59

      if (h < 12) {
          // condição para se a hora for menor que 12
          m <= 30
              ? (horasPorExtenso = horas[h])
              : (horasPorExtenso = horas[h + 1]); // se os minutos forem menores que 30, apresentar hora atual , se foremm maiores que 30 apresentar a hora seguinte
      } else if (h === 23) {
          m <= 30
              ? (horasPorExtenso = horas[h - horas.length + 1])
              : (horasPorExtenso = horas[0]);
      } else if (h > 12) {
          m <= 30
              ? (horasPorExtenso = horas[h - horas.length + 1])
              : (horasPorExtenso = horas[h - horas.length + 2]); // se os minutos forem menores que 30, apresentar hora atual , se foremm maiores que 30 apresentar a hora seguinte
      } else if (h === 12) {
          // condiçao que lida com o edge case do meio dia
          m <= 30
              ? (horasPorExtenso = horas[12])
              : (horasPorExtenso = horas[1]); // se os minutos forem menores que 30 => apresenta meio dia caso contrario, apresenta 13
      }

      if (m === 0) {
          return `${horasPorExtenso} em ponto`;
      } else if (m <= 30) {
          return `${horasPorExtenso} e ${minutoPorExtenso}`;
      } else if (m > 30) {
          if (horasPorExtenso === "meio dia") {
              return `${minInvert} para o ${horasPorExtenso}`;
          } else if (
              horasPorExtenso === "meia noite" ||
              horasPorExtenso === "uma"
          ) {
              return `${minInvert} para a ${horasPorExtenso}`;
          } else {
              return `${minInvert} para as ${horasPorExtenso}`;
          }
      }
  }
}