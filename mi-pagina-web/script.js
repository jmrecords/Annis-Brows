// Cambiar el color del título al hacer clic
document.querySelector('h1').addEventListener('click', function() {
    this.style.color = '#e74c3c';
});

// Validación simple del formulario
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Mensaje enviado (simulado)!');
});