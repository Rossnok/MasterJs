'use strict'

//Una funcion es un conjunto de instrucciones que se pueden llamar con un nombre especifico y se pueden reutilizar las veces que sea necesario
function por_pantalla(numero1, numero2) {
    document.write(`suma ${numero1 + numero2} <br/>`);
    document.write(`resta ${numero1 - numero2} <br/>`);
}

function por_consola(numero1, numero2) {
    console.log(`suma ${numero1 + numero2}`);
    console.log(`resta ${numero1 - numero2}`);
}


function calculadora(numero1, numero2, mostrar = false) {
    if (mostrar == false) {
        por_consola(numero1, numero2);

    } else {
        por_pantalla(numero1, numero2);
    }
}
/**
 Las funciones pueden recibir parametros y estos parametros pueden ser obligatorios o no, si las variables que representan
 los parametros no se han inicializado en la funcion, entonces seran obligatorios, si en cambio ya se han inicializado con algun valor
 estos parametros no seran obligatorios, como podemos observar en el ejemplo de calculadora, que numero1 y 2 son obligatorios pero no 
 el parametro mostrar
 */

/*
 De igual forma las funciones pueden contener mas funciones dentro, las cuales se mandan llamar dentro del flujo del bloque de codigo de la funcion padre
*/

calculadora(1, 2);