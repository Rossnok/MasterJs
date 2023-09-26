
//json
//Para acceder a las propiedades del objeto es con nombreObjeto.propiedad

window.addEventListener('load', () => {
    var pelicula = {
        titulo: 'Batman vs Superman',
        year: '2017',
        pais: 'USA',
    }// esto es un solo objeto json

    console.log(pelicula.titulo);//accede a la propiedad titulo del objeto pelicula

    var peliculas = [
        {
            titulo: 'Flash point paradox',
            year: '2008',
            pais: 'USA',
        },
        {
            titulo: 'Red hood',
            year: '2009',
            pais: 'USA',
        },
        {
            titulo: 'Dark war apocolyps',
            year: '2010',
            pais: 'USA',
        }
    ];// esto seria un array de jsons o un array de objetos, para acceder a cada pelicula se accede a la posicion y despues a la propiedad de la pelicula

    var peliculasContainer = document.querySelector('#peliculasContainer');

    peliculasContainer.style.border = '1px dashed black';
    peliculasContainer.style.width = 'auto';
    peliculasContainer.style.heigth = 'auto';


    peliculas.forEach(pelicula => {
        var object = document.createElement('p');
        object.append(pelicula.titulo);
        object.append(pelicula.year);
        object.append(pelicula.pais);
        peliculasContainer.appendChild(object);
    });// aqui se imprimen todos los titulos de las peliculas

});