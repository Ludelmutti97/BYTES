
// Contando quanta semana
function adicionarSemanas(data,semanas){
 const dataEmMs= data.valueOf()
 const msNumaSemana= 7*24*60*60*1000 // 7 dias na semana, 24horas, 60minutos, 60 segundos e 1000 milisegundos 
 return new Date(dataEmMs + semanas*msNumaSemana)


}
// Contando dia
function adicionarSemanas(data,dias){
    const dataEmMs= data.valueOf()
    const msNumDia= 24*60*60*1000 // 24horas, 60minutos, 60 segundos e 1000 milisegundos
    return new Date(dataEmMs - dias *msNumDia)
   
   
   }

   