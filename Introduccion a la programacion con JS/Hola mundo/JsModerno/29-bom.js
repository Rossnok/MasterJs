'use strict'
//browser objet model

function getBoomParameters() {
    console.log(window.innerHeight);// ver altura actual de la ventana del navegador
    console.log(window.innerWidth);//ver ancho de la ventana actual del navegador
}

//Obterner el tamaño total de la pantalla del usuario obtenido por el navegador

function getScreenSizeFromBrowser(){
    console.log(screen.width);
    console.log(screen.height);
}

//Obtener la url actual en la cual nos encontramos

function getUrl() {
    console.log(window.location);
}

function redirect(url){
    window.location.href = url;// esto redirige a una url del tipo 'https://google.com'
}

function openWindow(url){
    window.open(url);//abre una nueva ventana en el navegador con la url otorgada a la funcion open, tomar en cuenta que algunos navegadores tienen forma de restringir las ventanas emergentes actualmente
}