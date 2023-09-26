'use strict'

//DOM = DOCUMENT OBJECT MODEL
// se puede modificar el html de la pagina, seleccionar los diferentes elementos de la pagina para manejarlos a nuestro antojo

//var caja = document.getElementById('mi_caja');// esto obtiene todo el elemento div
//var caja = document.getElementById('mi_caja').innerHTML;// esto obtiene todo el contenido del diiv
//var caja = document.getElementById('mi_caja').innerHTML = 'Hola bienvenido al curso de rossnok';// esto cambia el contenido del div
//var caja = document.getElementById('mi_caja');// esto cambia el contenido del div pero con la variable caja
var caja = document.querySelector('#mi_caja');/*otra forma de seleccionar por id o en dado caso una clase especifica con un punto antes del nombre de la clase, para seleccionar una etiqueta se pone sin nada y para el id se pone el gato antes del id del elemento que queremos manipular*/

caja.innerHTML = 'Hola bienvenidos al curso de JS con Rossnok';

caja.style.background = 'blue';//esto modifica el background del div 

//como obtener elementos por sus etiquetas
var todos_los_divs = document.getElementsByTagName('div');
 
var elemento;
for(elemento in todos_los_divs) {
    if(typeof todos_los_divs[elemento].textContent == 'string'){
        var parrafo = document.createElement('p');
        var texto = document.createTextNode(todos_los_divs[elemento].textContent);
        parrafo.appendChild(texto);
        document.querySelector('#divContents').prepend(parrafo);
    }
}

//seleccionado una clase de algun elemento html del documento

var classRojo =  document.getElementsByClassName('rojo');

for(var rojo in classRojo){
    if( classRojo[rojo].className === 'rojo' ){
        classRojo[rojo].style.background = 'red';
    }
}//poner todos los div de la clase rojo con background rojo

console.log(classRojo);