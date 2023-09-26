/**
 * el try catch es una sentencia que nos ayuda a controlar los errores durante la ejecucion del codigo
 * permitiendo tener el control durante la ejecucion para poder informar que ha ocurrido un error o algo similar
 */
var year = 2023;

try{
  console.log(year);//si se escribiera mal la variable en este caso, se pasaria al catch el cual imprime el error en este ejemplo
}catch(error){
  console.log(error);
}