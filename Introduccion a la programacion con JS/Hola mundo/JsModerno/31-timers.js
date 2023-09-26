'use strict'

window.addEventListener('load', () => {
    //timers
    var pageTitle = document.querySelector('h1');
    
    function intervalo() {
        //set interval crea un intervalo de tiempo en el cual se ejecutara lo que esta dentro de la funcion callback
        let time = setInterval(() => {
            console.log('setInterval ejecutado')

            if (pageTitle.style.fontSize == '50px') {
                pageTitle.style.fontSize = '20px';
            } else {
                pageTitle.style.fontSize = '50px';
            }
        }, 3000); // el tiempo es en milisegundos, en este caso esto se ejecutaria cada 3 segundos

        return time;
    }  // para detener dicho intervalo asignado a la variable time se puede utilizar el clearInterval que dentro recibe el intervalo a detener

    var tiempo = intervalo();

    var stopInterval = document.querySelector('#btn');
    var startInterval = document.querySelector('#stopBtn');

    stopInterval.addEventListener('click', () => {
        clearInterval(tiempo);
    });// aqui se le agrega un evento al btn para que lance la alerta y despues detenga el intervalo, lo cual evitara que se vuelva a ejecutar

    startInterval.addEventListener('click', ()=>{
        intervalo();
    });

});