// las condicionales nos permiten hacer comparativas y realizar algo en base a el resultado verdadero o falso de la condicional
//si se cumple la condicional dentro del parentesis, se ejecuta el bloque de codigo que se encuentra entre llaves.

/**
 Operadores relacionales
 mayor: >
 menor: <
 mayor y menor o igual que: >= <=
 diferente de: !=
 igual que: ==
 */

var edad = 18;
var nombre = 'Rossnok';

if(edad >= 18){ 
    console.log('si es mayor de edad');

    if(edad > 23){
        console.log('naciste en el año 2000 o antes');
    } else {
        console.log('naciste despues del 2000');
    }

} else {
    console.log('no es mayor de edad');
}


/**
 * Operadores logicos
 * AND(Y): &&
 * OR(O): ||
 * Negacion: !
 */

var year = 2018;
//Negacion
if(year != 2016){
    console.log('no es 2016');
}

//AND
if(year > 2000 && year < 2023){
    console.log('estamos en el nuevo milenio');
} else {
    console.log('epoca antes del nuevo milenio');
}

//OR
if(year > 2008 || year < 2018){
    console.log('el año termina en 8');
} else {
    console.log('el año no temrina en 8');
}