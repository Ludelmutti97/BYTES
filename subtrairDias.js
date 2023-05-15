function subtraiDias(data, dias){

    const dataEmMs = data.valueOf()
    const msNumDia = 24 * 60 * 60 * 1000
    return new Date (dataEmMs - dias * msNumDia)
    }