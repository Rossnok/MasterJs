// arrays, arreglos, matrices

// los arrays se declaran con los corchetes y es una coleccion de varios datos
// los arrays pueden contener valores de diferentes tipos, incluso otros arrays u objetos
// los elementos se guardan en indices y estos indices inician siempre en 0 en la programacion

var nombres = ['rossnok', 'aquaRossnok', 'Onlyrossnok'];//declaracion normal de un array

var lenguajes = new Array('Java', 'PHP', 'Ruby', 'TypeScript');//declaracion de un array como un objeto

// para ingresar a un indice dentro del array para obtener un dato se utilizan los corchetes

console.log(nombres[1]);

//para ver la longitud de un array se puede utilizar la funcion length

console.log(nombres.length);


//formas de recorrer arreglos mas efectivas que solo el for

//FOREACH

lenguajes.forEach((elemento, index, data) => {
    console.log(elemento);//index y data son basicamente opcionales, se utilizan en casos puntuales
})//dentro de la funcion for each se declara una funcion anonima callback que puede recibir varios parametros