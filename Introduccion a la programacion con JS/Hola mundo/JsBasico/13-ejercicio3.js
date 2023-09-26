'use strict'

/*mostrar todos los numeros entre dos numeros ingresados por el usuario*/

var num1 = parseInt(prompt('ingresa el primer numero'));
var num2 = parseInt(prompt('ingresa el segundo numero'));

for (var i = num1 +1; i < num2; i++) {
    console.log(`${i}`);
}