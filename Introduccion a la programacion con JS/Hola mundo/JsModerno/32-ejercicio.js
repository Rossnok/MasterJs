
window.addEventListener('load', () => {
    var formulario = document.querySelector('#form');  
    var infoContainer = document.querySelector('#infoContainer'); 
    infoContainer.style.display = 'none';

    formulario.addEventListener('submit', () => {
        var nombre = document.querySelector('#name').value;
        var apellido = document.querySelector('#lastName').value;
        var edad = parseInt(document.querySelector('#age').value);

        var data = [nombre, apellido, edad];

        if(nombre.trim() == null || nombre.trim().length == 0){
            alert('debes ingresar el nombre para continuar');
            return false;
        }
        if(apellido.trim() == null || apellido.trim().length == 0){
            alert('debes ingresar el apellido para continuar');
            return false;
        }
        if(edad == null || edad <= 0 || isNaN(edad)){
            alert('debes ingresar una edad valida para continuar');
            return false;
        }

        
        infoContainer.style.display = 'block';

        data.forEach(element => {
            let parrafo = document.createElement('p');
            parrafo.append(element);
            infoContainer.appendChild(parrafo);
        });
    });


})