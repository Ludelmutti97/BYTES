function umOuOutro(a,b){
   /*  return a!== b */

    if((a && !b) || (!a && b))  /* return(a && !b) || (!a && b)  */
    {
        return true
        
        }else{
            return false
        }
    }
    
    
    /* Com if e else if {
         return true
    } else if({
        return true
    }else{
    return false}*/






console.log(
 umOuOutro(true, true),
 umOuOutro(false, true),
 umOuOutro(true, false),
 umOuOutro(false, false)
)


umOuOutro()


