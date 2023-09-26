//Transformacion de textos

var numero = 444;
var texto1 = 'bienvenido al curso de js de rossnok';
var texto2 = 'ES MUY BUEN CURSO';

// transformar un numero a un string

var numero_a_texto = numero.toString();

console.log(typeof numero_a_texto, numero);

// de minusculas a mayusculas

var toUpperCase = texto1.toUpperCase();
var toLowerCase = texto2.toLowerCase();

console.log(toLowerCase, toUpperCase);

//calcular la longitud de la cadena de texto

var textLong = texto1.length;

console.log(textLong);

// el metodo concat te permite concatenar a una variables lo que quieras, ya sea mas texto u otras variables que contienen texto

var textoConcatenado = texto1.concat(' '+ texto2);

console.log( textoConcatenado);

// metodos de busqueda dentro del texto

// search, indexOf retornan la posicion donde inicia la palabra buscada en caso de aparecer
// lastIndexOf arroja la posicion donde inicia la ultima vez que se encontro la palabra buscada
// si se usa el metodo match, este devuelve un array con informacion de la palabra encontrada, la posicion y el texto completo donde se encontro, para hacer busquedas globales con el match se necesita la expresion regular /palabra/gi
// el metodo charAt te permite recuperar una letra de la posicion que se le pase al metodo
// el metodo includes te permite buscar un texto en concreto, si lo encuentra retorna true y si no false