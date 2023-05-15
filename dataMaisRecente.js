function maisRecenteData(data1, data2) {
    
    const dataObj1 = new Date(data1);
    const dataObj2 = new Date(data2);
    
    // Compara os valores numéricos dos objetos Date e retorna o mais recente
    if (dataObj1.getTime() > dataObj2.getTime()) {
      return data1;
    } else {
      return data2;
    }
  }