// Selección de botón
const btnSubir = document.getElementById('btn-subir');

// Escucha
window.addEventListener('scroll', () => {
    // Validación
    if (window.scrollY > 300) {
        btnSubir.style.display = 'block';
    } else {
        btnSubir.style.display = 'none';
    }
});

// Evento click al botón
btnSubir.addEventListener('click', () => {
    window.scrollTo({
        top: 0,            // Coordenada superior
        behavior: 'smooth' // Desplazamiento suave
    });
});