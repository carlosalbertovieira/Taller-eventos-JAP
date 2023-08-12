document.addEventListener('DOMContentLoaded', function () {
    const divElement = document.querySelector('div');
    
    divElement.addEventListener('click', function () {
      alert('Hola! Soy el div');
    });
  
    const saludarButton = document.getElementById('saludarButton');
    
    saludarButton.onclick = function () {
      alert('Hola!');
    };
  });
  