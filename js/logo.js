window.addEventListener('resize', function() {
    var logo = document.querySelector('.logo-img');
    if (window.innerWidth < 768) {
        logo.src = 'img/logosPrograma/logo_peque.png';
    } else {
        logo.src = 'img/logosPrograma/logo_grande.png';
    }
});

// Ejecutar al cargar la página
window.addEventListener('load', function() {
    var logo = document.querySelector('.logo-img');
    if (window.innerWidth < 768) {
        logo.src = 'img/logosPrograma/logo_peque.png';
    } else {
        logo.src = 'img/logosPrograma/logo_grande.png';
    }
});