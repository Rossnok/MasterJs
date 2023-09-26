'use strict'
//con el evento load en el objeto window, podemos cargar toda la ventana sin importar donde se cargue el script en el archivo html
window.addEventListener('load', () => {
    //funcion que se ejecuta cuando sucede algo -> evento

    //eventos del raton

    function cambiarColor() {
        let bg = btn.style.background;

        if (bg == 'green') {
            btn.style.background = 'red';
        } else {
            btn.style.background = 'green';
        }

        return true;
    }

    var btn = document.querySelector('#btn');
    var inputTest = document.querySelector('#inputTest');

    //agregar el evento al btn para que ejecute la funcion cambiar color
    btn.addEventListener('click', () => { cambiarColor() });// evento click

    btn.addEventListener('mouseover', () => { 
        btn.style.background = 'blue';
        //si dentro se usa el operador this se selecciona el boton que tiene el evento actualmente -> esto ya no funciona asi
        //this.style.background = 'blue'; -> no funciona
        console.log(this);// this ya no obtiene el boton del evento, ahora obtiene toda la ventana completa
    });//mouse over

    btn.addEventListener('mouseout', () => { btn.style.background = '#ccc' });//mouse out

    //focus 
    inputTest.addEventListener('focus', () => {
        console.log('estas haciendo focus en el input');
    })

    //blur (cuando se sale del input, evento contrario al focus)
    inputTest.addEventListener('blur', () => {
        console.log('estas saliendo del input');
    })

    //keydown
    inputTest.addEventListener('keydown', (event) => {
        console.log('estas pulsando una tecla', String.fromCharCode(event.keyCode));
    });

    //keypress
    inputTest.addEventListener('keypress', (event) => {
        console.log('has pulsando una tecla', String.fromCharCode(event.keyCode));
    });

    //key up
    inputTest.addEventListener('keyup', (event) => {
        console.log('has levantado la pulsacion una tecla', String.fromCharCode(event.keyCode));
    });
})