'use strict'

// programa que muestre todos los numeros divisibles de un numero (limite hasta el 1000)

var numero = parseInt(prompt('ingresa el numero para mostrar todos sus divisores'));

for(var i = 1; i <= numero; i++){
    if(numero%i == 0){
        console.log(`el numero ${i} es divisor de ${numero}`);
    }
}