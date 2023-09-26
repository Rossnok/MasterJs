'use strict'

var suma = 0;
var numero = 0;
var media = 0;

for(var i = 0; numero >= 0; i++){
    numero = parseInt(prompt('ingresa el proximo numero, ingresa uno negativo para finalizar'));
    if(numero >= 0){
        suma += numero;

    }else {
        media = suma/i;
        console.log(`la suma de los numeros es ${suma} y la media es ${media}`);
    }

}