/**
 Si a show y hide se le pasa un parametro string se puede aplicar animacion a la accion, por ejemplo:
    - fast: realiza una animacion de recogida rapida
    - normal: animacion a velocidad normal
    - slow: animacion lenta

 Otras metodos para ocultar y mostrar contenido son fadeIn y fadeOut, los cuales con los mismos valores como parametro
 muestran una animacion de desvanecimiento.

 Tambien existe el metodo fadeTo, el cual recibe dos parametros, estos son ('velocidad de la animacion', opacidad)
 lo que hace este metodo es hacer una animacion de la opacidad actual a la opacidad pasada a dicho metodo, a la velocidad indicada
     * las animaciones pueden recibir callbacks para ejecutar codigo una vez haya terminado dicha animacion
 */

$(document).ready(() => {
    var caja = $('#caja');
    var animate = $('#animate_button');

    $('#show_button').on('click', () => {
        caja.fadeIn('normal');
    });

    $('#hide_button').on('click', () => {
        caja.fadeOut('slow',()=>{
            alert('la animacion termino');
        });
    });

    /** Animaciones con jQuery: las animaciones se realizan con css
     * el valor de las propiedades css utilizadas para las animaciones no pueden ser auto
     * las animaciones reciben como segundo parametro la velocidad a la cual se ejecutara, son las mismas vistas anteriormente      
     */
    animate.on('click', () => {
        caja.animate({
            marginLeft: '500px',
            fontSize: '30px'
        },
            'slow');

        caja.animate({
            marginLeft: '0px',
            fontSize: '19px'
        },
            'slow');

        caja.fadeOut('normal', 0);
    });

});