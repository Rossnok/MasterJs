// este modulo se encarga de obtener los valores de los inputs y guardarlos en el local storage

$(document).ready(() => {
    $("#login form").submit(() => {
        //se obtienen los valores de cada input de forma individual
        var name = $("#nameInput").val()
        var email = $("#emailInput").val()
        var pass = $("#passInput").val()

        // se almacenan los valores en el local storage, con su respectiva asignacion de identificacion
        localStorage.setItem('user_name', name)
        localStorage.setItem('user_email', email)
        localStorage.setItem('user_pass', pass)
    })

    var user_name = localStorage.getItem('user_name')
    var about_item = $("#about p")

    //se crea un texto con el nombre del usuario ingresado, se oculta el login y se agrega el link de logout
    if (user_name != null && user_name != undefined) {
        about_item.html(`Bienvenido ${user_name}`);
        about_item.append("<br><a href='#' id='logout'>Cerrar Sesion</a>") 
        $("#login").hide()
    }

    $("#logout").on("click", () => {
        localStorage.clear()//limpia los valores almacenados en el local storage
        location.reload()//location es el objeto usado para la recarga de la pagina
    });


})