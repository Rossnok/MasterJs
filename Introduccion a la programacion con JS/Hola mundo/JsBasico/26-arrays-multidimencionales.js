// los arrays multidimencionales no son mas que arrays dentro de otros arrays

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['la vida duele', 'la vida es bella', 'gran torino' ];

var cine = [categorias, peliculas];

console.log(cine);

console.log(cine[0][1]);//accede al elemento terror del primer array
console.log(cine[1][1]);//accede al elemento la vida es bella del segundo array

//OPERACIONES CON ARRAYS

//agregar elemento al array de peliculas

peliculas.push('Batman el caballero de la noche');//la funcion push para los arrays agrega un elemento al final de array

peliculas.pop();// esta funcion elimina el ultimo elemento de un array

var indice =  categorias.indexOf('Accion');// la funcion indexOf se puede utilizar para realizar busquedas dentro del array, es mas eficiente que usar un for u while para recorer elemento por elemento.

//para eliminar un elemento de del array se puede usar la funcion splice que recibe el indice a partir del cual eliminara elementos y la cantidad de elementos a eliminar

if(indice != -1){ // se comprueba si es diferente de -1 ya que si es -1 quiere decir que no encontro el elemento
    categorias.splice(indice, 1);
}

console.log(categorias);

var array_a_texto = categorias.join();//esta funcion convierte el array a un string separando por comas cada elemento

console.log(array_a_texto);

//por el contrario para pasar un string a ser un string (siempre que esten separados por coma los elementos a convertir)
//se puede hacer con la funcion split
var elementos = 'elemento1, elemento2, elemento3';
var arrayElementos = elementos.split(',');
console.log(arrayElementos);


// ordenar arrays
// metodo sort -> por orden alfabetico
// metodo reverse - > invierte el array

//for in, otra forma de recorrer los arreglos 
// el for in se usa de la siguiente manera, permitiendo recorrer un array por cada elemento del mismo
// este devuelve cada indice dentro de la variable declarada

for(let categoria in categorias){
    console.log(categorias[categoria]);
}

// Busqueda en un array con el metodo find

var resultado = categorias.find((categoria)=>{return categoria == 'Terror'});

console.log(resultado);

