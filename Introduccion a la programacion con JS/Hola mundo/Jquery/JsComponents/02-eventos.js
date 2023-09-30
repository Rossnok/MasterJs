$(document).ready(() => {
    var caja = $('#cajaEventos');
    var data = $('#data');

    //evento mouse over y mouse out
    /*  caja.mouseover(function () {
          $(this).css('background', 'red')
      });
  
      caja.mouseout(function () {
          $(this).css('background', 'green');
      });*/

    function cajaRoja() {
        $(this).css('background', 'red')
    }

    function cajaVerde() {
        $(this).css('background', 'green')
    }

    // evento hover
    caja.hover(cajaRoja, cajaVerde);

    //evento click y doble click
    caja.on('click', function () {
        $(this).css('background', 'blue');
    });

    caja.on('dblclick', function () {
        $(this).css('background', 'yellow');
    });

    //evento focus y blur (cuando este en foco, cuando salga del elemento)
    $('#name').on('focus', function () {
        $(this).css('border', '.5px solid red');
    });

    $('#name').on('blur', function () {
        $(this).css('border', '2px solid blue')
    });

    //mouseup, mousedown
    data.on('mouseup', function () { 
        $(this).css('border', '1px dashed black');
    });
    
    data.on('mousedown', function () { 
        $(this).css('border', '1px dashed red');
    });

    //mouse move
    $(document).mousemove(function(event){
        //console.log(`Coordenadas X: ${event.clientX}`);// arroja las coordenadas en el eje x
        //console.log(`Coordenadas y: ${event.clientY}`);// arroja las coordenadas en el eje y
        $('body').css('cursor', 'none');// esto oculta el cursor

        $('#sigueme').css('left', event.clientX)
                     .css('top', event.clientY);
    });
});