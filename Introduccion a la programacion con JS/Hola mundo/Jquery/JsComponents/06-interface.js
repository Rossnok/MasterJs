/** metodos jquery UI
     * draggable() -> este metodo nos permite mover los elementos seleccionados con el selector
     
     * resizable -> metodo que permite redimencionar los elementos (necesario importar los stilos de jquery ui) 
     
     *  selectable() -> nos permite agregar estilos al elemento seleccionado (se tienen que crear clases ccs con los metodos css como .        ui-selectable y ui-selecting example: ul .ui-selectable{estilos})
     
     * sortable() -> permite organizar los elementos arrastrandolos (no se puede utilizar selectable y sortable al mismo tiempo)
     en este evento se puede detectar cuando se actualiza mediante el objeto update que contiene un callback en el cual se puede ejecutar un bloque de codigo cuando se actualiza el orden de la lista

     *droppable() -> permite mover un elemento dentro de otro y obtener el elemento que ha sido puesto dentro del elemento droppable, con el parametro ui se pueden obtener los parametros del elemento soltado dentro del contenedor droppable
*/
$(document).ready(() => {
    //$('.elemento').draggable();    
    $('.elemento').resizable();
    //$('.interface_games_container').selectable();

    $('.interface_games_container').sortable({
        update: function (event, ui) {
            var listaJuegos = $('.interface_games_container li');

            for (elemento in listaJuegos) {
                typeof listaJuegos[elemento] === 'object' ?
                    (typeof listaJuegos[elemento].innerHTML === 'string' ? console.log(listaJuegos[elemento].innerHTML) : '') : ''
            }
            console.log('-------------------------------------------------------');
        }
    });

    $('#movedElement').draggable();

    $('#dropArea').droppable({
        drop: function (event, ui) {
            console.log(ui.draggable[0].innerText);
        }
    });

    /** Efectos
     * fade
     * explode
     * blind
     * drop
     * fold
     * puff
     * shake
     * scale
     * hay muchos mas efectos en la documentacion
     * como segundo parametro se le puede pasar la velocidad o la configuracion, si se pasan los dos, el segundo es la config
     */

    var mostrar = $('#mostrar');
    var cajaEfectos = $('#cajaEfectos');

    mostrar.on('click', () => { 
        cajaEfectos.toggle('drop', 'slow');// la velocidad se le puede pasar incluso en ms
    });

    // Tooltip se puede usar directamente en el documento
    // un tooltip es un comentario que contiene informacion
    $('a, button').tooltip();

    // Cuadros de dialogo o popUp
    var terminosCondiciones = $('#popUp');

    terminosCondiciones.dialog();

    // Date picker
    var calendario  = $('#datePicker');

    calendario.datepicker();

    // Tabs
    var tabs = $('#tabs');

    tabs.tabs();
});