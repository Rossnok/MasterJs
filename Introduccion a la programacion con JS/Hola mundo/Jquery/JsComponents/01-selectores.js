// SELECTORES EN JQUERY 

//lo primero es comprobar si el documento se ha cargado
$(document).ready(() => {
    //selector de id
    $('#rojo').css('background', 'red')
        .css('color', 'white');// esta es la forma de acceder a las propiedades css desde el codigo en jquery (se pueden concatenar propiedades css)

    $('#amarillo').css('background', 'yellow')
        .css('color', 'green');

    $('#verde').css('background', 'green')
        .css('color', 'white');

    //selector de clases
    var zebraClass = $('.zebra');// asi se seleccionan todos los elementos que tengan la clase zebra

    zebraClass.css('padding', '1em');// esto le aplica el estilo a todos los elementos que contienen la clase

    $('.sin_borde').on('click', function () {
        $(this).addClass('zebra');
    });

    //selectores de etiqueta
    var parrafos = $('p');

    parrafos.on('click', function () {
        var element = $(this);

        element.toggleClass('new_fontsize');// esta funcion agrega la clase en caso de que no exista en el elemento y la quita si ya existe 
    });

    //selectores de atributos
    //para seleccionar un atributo se utiliza la siguiente estructura $('[atributo='valor del atributo a seleccionar']')
    $('[title="Serebii"]').css('color', 'green').
        css('text-decoration', 'none');

    $('[title="Google"]').css('color', 'yellow').
        css('text-decoration', 'none');

    $('[title="Facebook"]').css('color', 'blue').
        css('text-decoration', 'none');

        /* las funciones .find y .parent son utilizadas para navegar entre elementos y buscar clases dentro de dichos elementos, el parent
        nos lleva al padre del elemento en el que estamos, se puede usar de forma sucesiva y el find nos buscara el elemento que le pasemos 
        como parametro para buscar */
});