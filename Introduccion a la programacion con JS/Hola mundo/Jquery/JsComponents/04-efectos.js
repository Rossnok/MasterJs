/**
 Si a show y hide se le pasa un parametro string se puede aplicar animacion a la accion, por ejemplo:
    - fast: realiza una animacion de recogida rapida
    - normal: animacion a velocidad normal
    - slow: animacion lenta

 Otras metodos para ocultar y mostrar contenido son fadeIn y fadeOut, los cuales con los mismos valores como parametro
 muestran una animacion de desvanecimiento.

 Tambien existe el metodo fadeTo, el cual recibe dos parametros, estos son ('velocidad de la animacion', opacidad)
 lo que hace este metodo es hacer una animacion de la opacidad actual a la opacidad pasada a dicho metodo, a la velocidad indicada
 */

$(document).ready(() => {
    $('#show_button').on('click', () => {
        $('#caja').fadeIn('normal');
    });

    $('#hide_button').on('click', () => {
        $('#caja').fadeOut('slow');
    });
});