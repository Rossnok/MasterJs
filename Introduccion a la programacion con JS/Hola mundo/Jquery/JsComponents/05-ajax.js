/** Peticiones Ajax
 * Ajax nos permite hacer peticiones asincronas para la recuperacion de informacion sin la necesidad de recargar la pagina
 * con esto se puede actualizar alguna parte de la pagina de forma independiente
 * El metodo load nos permite cargar todo el html desde una url.
 */

$(document).ready(() => {
    // Metodo Load
    var datos = $('#datosAjax');

    //datos.load('https://reqres.in/');

    // Metodos GET y POST
    $.get('https://reqres.in/api/users', { page: 2 }, (info) => {
        console.log(info)
        info.data.forEach((element) => {
            datos.append('<div>');
            datos.append(`<img src="${element.avatar}"></img><br>`);
            datos.append(`<p>Nombre: ${element.first_name}</p><br>`);
            datos.append(`<p>Apellidos: ${element.last_name}</p><br>`);
            datos.append(`<p>Email: ${element.last_name}</p><br><hr>`);
            datos.append('</div>');
        })
    });

    var user = {
        name: 'rossnok',
        age: '27',
        subject: 'programing'
    }

    $.post('https://reqres.in/api/users', user, (response) => {
        console.log(response);
    })
        .done(() => {
            console.log('registro realizado correctamente');
        });

    /** Metodo ajax: configuracion en formato json
     * type: tipo de peticion get o post
     * dataType: tipo de dato enviado o recibido
     * contentType: investigar***
     * url: direccion de la rest api
     * data: informacion que se envia
     * beforeSend: callback que se ejecuta antes de hacer la peticion
     * success: callback que se ejecuta si todo se realizo correctamente
     * error: en caso de un error
     * timeout: tiempo maximo permitido para la llamada en milisegundos
     */

    $.ajax({
        type: 'post',
        //dataType: 'json',
        //contentType: 'application/json',
        url: 'https://reqres.in/api/users',
        data: user,
        beforeSend: () => {
            console.log('enviando usuario...')
        },
        success: (response) => {
            console.log(response);
        },
        error: () => {
            console.log('error...');
        },
        timeout: 2000,
    })
});