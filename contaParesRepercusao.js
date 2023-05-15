function contaPares(array) {


if( array.length ===0){
    return 0
}
if([array.length-1] % 2===0){
    return 1
}
 return array([array.length-1])+(contaPares(array.slice(0, array.length-1)))


}
