//las dos palabras reservadas let y var son utilizadas en la declaracion de variables
// la diferencia es que let declara variables para un bloque y var para un ambito mas global.

var numero = 50;
console.log(numero);

if(true){
    var numero = 40;//reasignacion de la variable global numero
    console.log(numero);
}

console.log(numero);// como se reasigno la variable, su valor a nivel global sigue siendo 40 aun cuando esto esta fuera del bloque de codigo donde se reasigno

let newNum = 10;
console.log(newNum);

if(true){
    let newNum = 1;
    console.log(newNum);
}

console.log(newNum);// esta ya no es una variable global por lo cual su valor debe ser 10 ya que solo tiene el valor de 1 dentro del bloque del if y esa se cuenta como una nueva variable, independiente de la del exterior

if(true){
    var num3 = 1234;
}

console.log(num3);// esta variable es posible imprimirla porque se declaro como global dentro del if, si se cambia por let la declaracion deberia dar error.