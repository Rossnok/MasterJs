//bucle while consta de una sola condicion, mientras se cumpla se ejecuta de forma infinita.
//se puede controlar con una variable que funcione como contador
var year = 2018;

/*
while(year <= 2051){
    console.log(`estamos en el año ${year}`);
    year++;
}*/

var years = 20;

// el ciclo do while ejecuta primero el bloque de codigo en el do, despues comprueba en el while y vuelve a ejecutar si la condicion se cumple

do{
    console.log('aun no es diferente de 20');
    years = 20;
} while (years != 20)

//dentro de cualquier ciclo se puede utilizar break; para romper el ciclo y continuar con el resto del codigo