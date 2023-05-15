function subtraiHoras(data, horas) {
    // escreve aqui a função
    

const dataEmMs = data.valueOf()
const msNumHora = 60 * 60 * 1000
return new Date (dataEmMs - horas * msNumHora)

}