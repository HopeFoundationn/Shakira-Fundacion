// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Simple form handling (demo)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias! Este es un formulario de demostración. En un sitio real se enviaría la información.');
        });
    });
});