/*
    LOS PARAMETROS REST Y SPREAD SON FORMAS ESPECIALES DE ENVIAR Y RECIBIR INFORMACION PARA LAS FUNCIONES
    AMBAS SE UTILIZAN ANTEPONIENDO TRES PUNTOS AL NOMBRE DE UN ARRAY QUE SE ENVIA O SE CREA PARA RECIBIR O ENVIAR UNA CANTIDAD 
    INDETERMINADA DE PARAMETROS
*/

// ejemplo de rest

function frutas(fruta1, fruta2, ...frutasExtras){
    console.log(fruta1, fruta2);
    console.log(frutasExtras);
}

/*
 Si en este caso se le pasaran mas parametros de los que recibe la funcion, hay una forma de agruparlos todos
 en un solo array, sin importar la cantidad que se le pasen a la funcion,
 la forma de hacerlo es usar un parametro rest que sera un arreglo que almacenara todos esos parametros extras recibidos, el parametro
 rest de declara de la siguiente manera -> ...nombreArray
*/

frutas('Naranja', 'Manzana', 'Fresa', 'Sandia', 'Melon');

/*
 Por otro lado, si lo que se quiere es mandar un array y que este se divida en diferentes parametros se puede usar un parametro
 SPREAD que es basicamente mandar el array como parametro con tres puntos como prefijo
 esto se muestra en el siguiente ejemplo
*/

var frutasEnviadas = ['Naranja', 'Manzana', 'Fresa', 'Sandia', 'Melon']

frutas(...frutasEnviadas);