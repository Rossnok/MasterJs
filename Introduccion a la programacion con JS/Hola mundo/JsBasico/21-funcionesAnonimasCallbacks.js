/*
  Una funcion anonima es una funcion sin nombre, estas funciones se pueden almacenar en variables las cuales cumpliran con 
  la funcion del nombre de la funcion, las funciones anonimas tambien pueden ser enviadas sin la necesidad de una variable, en ambos casos
  son utilizadas para hacer un callback que es la llamada de este tipo de funciones dentro de una funcion no anonima.
*/

var pelicula = function (nombre) {
    console.log(`El nombre de la pelicual es '${nombre}'`);
}

function peliculaInfo(nombre, year, imprimirYear, imprimirGenero) {
    pelicula(nombre); // este es el callback
    imprimirYear(year);
    imprimirGenero('Horror');
}

peliculaInfo(
    'La noche del demonio',
    2008,
    function (year) { console.log(`El año de estreno de la pelicula fue ${year}`) },
    (genero) => {console.log(`El genero de la pelicula es ${genero}`)});

/* las funciones flecha no son mas que una forma de acortar la forma en que se escribe una funcion anonima, por ejemplo, en lugar de escribir
    function(){} se escribiria como () => {}
*/

/*
  El ambito de las variables es importante de recordar ya que una variable global existe en todos los ambitos pero por ejemplo
  una variable declarada dentro de una funcion, solo existe dentro de esa funcion.
*/

