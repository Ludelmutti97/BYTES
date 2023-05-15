function diferencaEmDias(data1, data2) {
    // escreve aqui a função

     const umDiaEmMilissegundos = 24*60*60*1000 //milissegundos em um dia.


  const diferencaEmMilissegundos = Math.abs(data2 - data1);
  const diferencaEmDias = Math.floor(diferencaEmMilissegundos / umDiaEmMilissegundos);

  return diferencaEmDias;
}