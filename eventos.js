document.addEventListener('DOMContentLoaded', function () {
    const divElement = document.getElementById('botonContainer');
    
    divElement.addEventListener('click', function () {
        alert('Hola! Soy el div');
    });

    const saludarButton = document.getElementById('saludarBtn');
    
    saludarButton.onclick = function () {
        alert('Hola!');
    };
});
