
/* web storage o local storage es una forma de almacenar informacion en el navegador en forma de session y esta informacion puede persistir  durante la navegacion entre paginas y componentes de nuestra pagina web*/

window.addEventListener('load', () => {
    if (typeof (Storage) !== 'undefined') {
        console.log('local storage esta disponible en este navegador');
    } else {
        console.log('local storage no disponible en el navegador');
    }//comprobar si el navegador admite el local storage

    //Guardar un dato en el local storage
    localStorage.setItem('titulo', 'curso de JS rossnok');// la funcion set item recibe dos parametros, la key y el valor de la misma

    //recuperar elemento desde el local storage
    var localElement = localStorage.getItem('titulo'); // se obtiene mediante la key del elemento guardado

    console.log(localElement);

    //guardar objetos en el local storage
    // el local storge no admite archivos json
    //por lo cual hay que convertir los objetos json a string json
    var user = {
        userName: 'rossnok',
        password: 'arrocito',
        active: true,
    }// objeto json

    localStorage.setItem('session', JSON.stringify(user));// esta seria la forma adecuada de enviarlo, conviertiendo a string el objeto json

    //recuperar ese objeto json string con JSON.parse que es la forma correcta para que vuelva a ser un objeto json
    var recoveredElement = JSON.parse(localStorage.getItem('session'));

    console.log(recoveredElement);

    //remover elemento del local storage
    localStorage.removeItem('titulo');// elimina un elemento con la key
    localStorage.clear();//elimina todo el local storage
});