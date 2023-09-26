'use strict'

/* mostrar todos los numeros impares entre dos numeros*/

var numero1 = parseInt(prompt('Ingresa el primer numero', 0));
var numero2 = parseInt(prompt('Ingresa el segundo numero', 0));

while( numero1 < numero2){
    numero1++;

    if(numero1%2 != 0){
        console.log(`el numero ${numero1} es impar`);
    }    
}