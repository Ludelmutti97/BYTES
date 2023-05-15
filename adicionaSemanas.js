function adicionaSemanas(data, semanas) {
    // escreve aqui a função

      let milissegundos = 7 * 24 * 60 * 60 * 1000;
    let semanaMil = semanas * milissegundos;
    let novaData = data.getTime() + semanaMil;
    let dataAtualizada = new Date(novaData);

    return dataAtualizada;
}