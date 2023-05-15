class Porta{

    constructor(){

        this.trinco = true;
    }



   /* destrancar(){ 

    this.trinco = false;
}

    trancar(){
    this.trinco = true;
}*/
}

trancarEdestrancar(){

    if(this.trinco == true){
        this.trinco = false;
    }else{
        this.trinco = true;
}
    this.trinco = !this.trinco;;
}




const novoPorta = new Porta()
novoPorta.destrancar()

console.log(novoPorta)


