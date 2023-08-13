document.addEventListener("DOMContentLoaded", function() {
    const ElementoDiv = document.getElementById('div');
    const ElementoBoton = document.getElementById('boton');

    if (ElementoBoton) {
        ElementoBoton.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }

    if (ElementoDiv) {
        ElementoDiv.addEventListener("click", function(){
            alert('¡Hola! Soy el div.');
        });
    }
});
