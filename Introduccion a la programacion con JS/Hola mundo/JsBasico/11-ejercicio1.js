'use strict';

do {
    var num1 = parseInt(prompt('Ingresa el primer numero para la comparacion'), 0)
    var num2 = parseInt(prompt('Ingresa el segundo numero para la comparacion'), 0)

} while (num1 <= 0 || isNaN(num1) || num2 <= 0 || isNaN(num2))

if (num1 == num2) {
    console.log(`Los numeros son iguales`)

} else if (num1 > num2) {
    console.log(`el numero ${num1} es mayor que el numero ${num2}`)

} else if (num1 < num2) {
    console.log(`el numero ${num2} es mayor que el numero ${num1}`)

}