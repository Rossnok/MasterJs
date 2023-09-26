// fetch y peticiones a servicios/ api rest
//fetch hace peticiones asyncronas a un servidor
//fetch hace una peticion ajax
/*  encadenar las promesas es la mejor forma de hacer estas llamadas con fetch, justo como se ve en el ejemplo, primero se hace el callback
    de la promesa get_users() y dentro de la ultima parte de la llama de esta promesa, se retorna la siguiente promesa get_user() para continuar
    trabajando con ella 
*/
 /**
  * casos donde se usan las promesas
  * cuando se tienen que leer datos
  * cuando de envian datos por metodos como post, ajax
  */

window.addEventListener('load', () => {
    var usuarios = [];
    var usersContainer = document.querySelector('#usuarios');
    var singleUser = document.querySelector('#singleUser');

    get_users().then(data => data.json())// se capturan los datos y se pasan a json
        .then(data => {// se trabaja con el json data
            usuarios = data;
            listar_usuarios(usuarios);

            return get_user();
        })
        .then(data => data.json())
        .then(data => {
            list_single_user(data);

            return get_info();
        })
        .then(data => JSON.parse(data))
        .then(data => {
            list_single_user(data);
        })
        .catch((error) => {// el catch se utiliza para obtener el error si ocurre alguno en la ejecucion de las promesas
            console.log(error);
        });

    function get_users() {
        return fetch('https://jsonplaceholder.typicode.com/users');
    }

    function get_user() {
        return fetch('https://reqres.in/api/users/2');
    }

    function list_single_user(usuario) {
        let hr = document.createElement('hr');
        singleUser.appendChild(hr)

        var avatar = document.createElement('img');
        avatar.src = `${usuario.data.avatar}`

        var name = document.createElement('h3');
        name.innerHTML = `${usuario.data.first_name} ${usuario.data.last_name}`;

        var email = document.createElement('h3');
        email.innerHTML = `${usuario.data.email}`;

        singleUser.appendChild(name);
        singleUser.appendChild(email);
        singleUser.appendChild(avatar);
    }

    function listar_usuarios(usuarios) {
        usuarios.map((usuario, i) => {
            let hr = document.createElement('hr');
            usersContainer.appendChild(hr)

            var name = document.createElement('h3');
            name.innerHTML = `${usuario.name}, username: ${usuario.username}`;

            var email = document.createElement('h3');
            email.innerHTML = `${usuario.email}`;

            var phone = document.createElement('h3');
            phone.innerHTML = `${usuario.phone}`;

            usersContainer.appendChild(name);
            usersContainer.appendChild(email);
            usersContainer.appendChild(phone);

        });
    }

    //creacion de una promesa
    function get_info() {
        var profesor = {
            data: {
                first_name: 'rossnok',
                last_name: 'Mendez',
                email: 'https://www.linkedin.com/in/sergio-rosas-mendez/',
                avatar: '../../../Introduccion HTML/resources/images/Arcanine.png'
            }
        }

        return new Promise((resolve, reject) => {
            var profesorStringData = JSON.stringify(profesor);

            if (typeof profesorStringData !== 'string') return reject();// rechaza la promesa

            return resolve(profesorStringData) //se resuelve la promesa y se devuelven los datos
        });// aqui se instancia la promesa        
    }

});