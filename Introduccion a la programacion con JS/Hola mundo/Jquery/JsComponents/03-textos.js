$(document).ready(() => {
    //seleccionar una serie de elementos
    var addLinkButton = $('#add_button');
    var addLinkInput = $('#add_link');

    checkLinks();

    addLinkButton.on('click', () => {
        $('#menu_links').append(`<li><a href="${addLinkInput.val()}"></a></li>`);
        checkLinks();
        //con la funcion html se pueden agregar componentes sin necesidad de crearlos en jquery pero reemplaza todos los elementos dentro de la etiqueta
        //con la funccion append si se agrega un nuevo elemento dejando intactos los anteriores, prepend agrega el elemento al inicio
    });

    function checkLinks() {
        $('a').each(function (index) {
            var element = $(this);
            var enlace = element.attr('href');// attr para agregar atributo, removeAttr para remover algun atributo
            element.text(enlace);//se le pasa el href al cuerpo de la etiqueta a
        });
    }
});