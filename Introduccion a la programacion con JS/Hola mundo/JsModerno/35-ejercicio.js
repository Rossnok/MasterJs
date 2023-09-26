
window.addEventListener('load', () => {
    var formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', () => {
        var pelicula = document.querySelector('#nombrePelicula').value;
        localStorage.setItem(pelicula, pelicula);
    });

    var listaPeliculas = document.querySelector('#ulPeliculas');

    for (var pelicula in localStorage) {
        if (typeof localStorage[pelicula] === 'string') {
            var li = document.createElement('li');
            li.append(pelicula);
            listaPeliculas.appendChild(li);
        }
    };

});