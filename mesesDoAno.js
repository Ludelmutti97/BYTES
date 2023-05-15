
function mesesDoAno(mes){
if(  mes < 1 || mes> 12){
   
    return "Por favor insira um número entre 1 e 12."}
    
      let meses = new Map([
    
    
      [ "Janeiro","1"],
       [ "Fevereiro","2"],
      [ "Março","3"],
        ["Abril","4"],
       [ "Maio","5"],
        ["Junho","6"],
      ["Julho","7"],
        ["Agosto","8"],
        ["Setembro","9"],
        ["Outubro","10"],
       [ "Novembro","11"],
       [ "Dezembro","12"]
    ])
     const res = map.mes(mesesDoAno)
    
    return res
}
    //// FEITO PELO CHAT GPT
    function mesesDoAno(numero){
    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ];
      
      const mes = meses[numero - 1];
      if (mes) {
        return mes;
      } else {
        return "Por favor insira um número entre 1 e 12.";
      }
    }
    
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 0];
    const meses = numeros.map(numeroParaMes);



    // Com SET

    function mesesDoAno(mes){
      // escreve aqui a função
  
    if(  mes < 1 || mes> 12){
     
      return "Por favor insira um número entre 1 e 12."}
      
        let meses = new Map()
        meses.set(1 ,"Janeiro"),
        meses.set (2, "Fevereiro"),
        meses.set (3,"Março"),
        meses.set  (4,"Abril"),
        meses.set( 5, "Maio"),
        meses.set  (6,"Junho)",
        meses.set(7,"Julho"),
         meses.set( 8,"Agosto"),
         meses.set (9,"Setembro"),
         meses.set (10,"Outubro"),
        meses.set ( 11,"Novembro"),
         meses.set(12 ,"Dezembro")
      )
      return  meses.get(mes)
     
      
  
      
  }