function crearTestimonio(testimonio){
    return `
    <div class="testimonio">
        <h3>${testimonio.nombre} ${testimonio.apellido}</h3>
        <div class="estrella">
            ${"★".repeat(testimonio.estrellas)}
        </div>
        <p>${testimonio.comentario}</p>
        <i class="fa-regular fa-heart"></i>
    </div>
    `
}

function agruparTestimonios(testimonios, tamañoGrupo){
    const grupos = [];
    for (let i = 0; i < testimonios.length; i += tamañoGrupo) {
        grupos.push(testimonios.slice(i, i + tamañoGrupo));
    }
    return grupos;
}

function crearSlide(grupo, index){
    const activo = index === 0 ? "active" : "";
    return `
    <div class="carousel-item ${activo}">
        <div class="grid-testimonios">
            ${grupo.map(t => crearTestimonio(t)).join('')}
        </div>
    </div>
    `;
}

function mostrarTestimonio(testimonios){
    const contenedor = document.getElementById("contenedor-testimonios");
    const tamañoGrupo = window.innerWidth <= 600 ? 1 : 3;
    const grupos = agruparTestimonios(testimonios, tamañoGrupo);
    contenedor.innerHTML = grupos.map((grupo, i) => crearSlide(grupo, i)).join('');
}

let testimoniosGuardados = [];

document.addEventListener('DOMContentLoaded', () => {
    fetch("https://dummyjson.com/c/0b20-6941-4d86-9cd5")
    .then(response => response.json())
    .then(data => {
        testimoniosGuardados = data.testimonios;
        mostrarTestimonio(testimoniosGuardados);
    })
    .catch(error => {
        console.error("Error al cargar los testimonios:", error);
    });
});

// re-agrupa si el usuario rota el celular o redimensiona la ventana
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (testimoniosGuardados.length > 0){
            mostrarTestimonio(testimoniosGuardados);
        }
    }, 250);
});