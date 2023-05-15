function umOuOutro(a,b,c){

return (
(a && !b && !c)||
(!a && b && !c)||
(!a && !b && c)
)

        
      
}
console.log(
    umOuOutro(true, true, false),// false
    umOuOutro(false, true,false),// true
    umOuOutro(false, false,false),// false
    umOuOutro(true, true,true),// false
    umOuOutro(false, false,true),// true
)
