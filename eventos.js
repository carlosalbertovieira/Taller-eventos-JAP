const ElementoDiv = document.getElementById('div')
const ElementoBoton = document.getElementById('boton')

ElementoBoton.addEventListener('click', function (event) {
    event.stopPropagation();
});


ElementoDiv.addEventListener("click", function(){
    alert ('Hola! Soy el div.');
});
