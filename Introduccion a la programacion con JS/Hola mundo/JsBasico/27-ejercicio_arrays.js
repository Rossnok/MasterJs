/**
 * Que pida 6 numeros por pantalla al usuario
 * Mostrar todos los elementos del array en el cuerpo de la pagina y en la consola
 * Ordenarlo y mostrarlo
 * invertir su orden y mostrarlo
 * busqueda de un valor introducido por el usuario que nos diga si lo encuentra y en que posicion
 * se valorara el uso de funciones
 */

var array = [];


function tareas_con_array(){
    llenar_array();
    ordenar_invertir_array();
    buscarElemento();
}

var llenar_array = () => {
    for(let i = 0; i < 6; i++){       
      array.push(prompt('Agrega un nombre de videojuego al arreglo', 'none'));  
    }

    imprimirArray();
}

var ordenar_invertir_array = () => {
    array.sort();
    imprimirArray();
    array.reverse();
    imprimirArray();
}

var imprimirArray = () => {
    array.forEach(element => {
        document.write(`${element} <br/>`);
        console.log(element);
    });
    
    document.write('<hr>');
    console.log('******************************************')
}

var buscarElemento = () => {
 let valor = prompt('ingresa el valor para buscar', 'none');
 let indice = array.findIndex(valor);

 if(valor >= 0){
    console.log(`El elemento se ha encontrado, su indice es ${indice}`);

 } else {
    console.log('No se encontro dicho elemento');
 }
}

tareas_con_array();