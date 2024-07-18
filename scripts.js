/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// When the page is fully loaded, add the 'loaded' class to the body
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

function playVideo() {
  document.querySelector('video').play();
}

function pauseVideo() {
  document.querySelector('video').pause();
}
const track = document.querySelector('.carrusel-track');
let trackWidth = track.scrollWidth;
let startPos = 0;

const moveToNextSlide = () => {
  startPos -= 2; // Ajusta la velocidad del carrusel

  if (Math.abs(startPos) >= trackWidth / 2) {
    startPos = 0; // Reinicia la posición para el efecto continuo
  }

  track.style.transform = `translateX(${startPos}px)`;
};

setInterval(moveToNextSlide, 20); // Ajusta la frecuencia de actualización del carrusel

document.getElementById('form-impresion-3d').addEventListener('submit', function(event) {
  event.preventDefault();

  // Aquí puedes agregar lógica para manejar el envío del formulario
  // Por ejemplo, enviar los datos a un servidor o mostrar un mensaje de éxito

  alert('Solicitud de impresión 3D enviada exitosamente!');
});
// Añadido para animaciones al desplazarse
function checkScrollAnimations() {
  var elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .rotate-in');

  elements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });
}

// Ejecutar la función al cargar la página y al hacer scroll
document.addEventListener('DOMContentLoaded', checkScrollAnimations);
window.addEventListener('scroll', checkScrollAnimations);

