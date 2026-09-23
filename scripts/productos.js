const productos = [
    {
        imagen: "../images/Dokdo.avif",
        titulo: "ROUND LAB - 1025 Dokdo Cleanser Bundle 2pcs [150ml]",
        categoria: "Limpieza",
        costoUSD: 11.60,
        precio: 23.99
    },
    {
        imagen: "../images/cleansingOil.png",
        titulo: "SKIN1004 Aceite de Limpieza Ligero Madagascar Centella 200ml",
        categoria: "Limpieza",
        costoUSD: 13.10,
        precio: 26.99
    },
    {
        imagen: "../images/espumaCentella.avif",
        titulo: "SKIN1004 Madagascar Espuma de Ampolla Centella 4.22 fl oz",
        categoria: "Limpieza",
        costoUSD: 9.49,
        precio: 19.99
    },
    {
        imagen: "../images/dokdoTonico.jpg",
        titulo: "ROUND LAB 1025 Dokdo Tónico 6.76 fl oz",
        categoria: "Hidratacion",
        costoUSD: 11.68,
        precio: 23.99
    },
    {
        imagen: "../images/mascarillaHialuronica.jpeg",
        titulo: "NINELESS - Mascarilla My Fit Sheet No.5 Hyaluronic Acid",
        categoria: "Hidratacion",
        costoUSD: 0.98,
        precio: 1.99
    },
    {
        imagen: "../images/collagenMascarilla.webp",
        titulo: "NINELESS - Mascarilla My Fit Sheet No.7 Collagen",
        categoria: "Hidratacion",
        costoUSD: 0.98,
        precio: 1.99
    },
    {
        imagen: "../images/Glow-Serum.avif",
        titulo: "Beauty of Joseon - Sérum Facial Glow Serum [30ml]",
        categoria: "Luminosidad",
        costoUSD: 11.47,
        precio: 22.99
    },
    {
        imagen: "../images/anua.avif",
        titulo: "Anua - Niacinamide 10% + TXA 4% Serum Bundle 30 ml",
        categoria: "Luminosidad",
        costoUSD: 15.49,
        precio: 30.99
    },
    {
        imagen: "../images/barrierCream.webp",
        titulo: "ETUDE - Soon Jung 2x Barrier Intensive Cream Bundle [60ml x2]",
        categoria: "Piel-Sensible",
        costoUSD: 12.13,
        precio: 24.99
    },
    {
        imagen: "../images/tocobo.avif",
        titulo: "TOCOBO Cica Suero Solar Calming SPF50+ PA+++",
        categoria: "Proteccion-Solar",
        costoUSD: 15.34,
        precio: 30.99
    },
    {
        imagen: "../images/contorno-de-ojos-boj-revive-serum-beauty-of-joseon--2-.jpg.webp",
        titulo: "Beauty of Joseon - Sérum Contorno de Ojos Revive Eye Serum Mini [10ml]",
        categoria: "Cuidado-Nocturno",
        costoUSD: 4.56,
        precio: 9.99
    },
    {
        imagen: "../images/retinol.webp",
        titulo: "Celimax - The Vita A Retinal Shot Potenciador Reafirmante",
        categoria: "Cuidado-Nocturno",
        costoUSD: 17.99,
        precio: 35.99
    },
    {
        imagen: "../images/patches.avif",
        titulo: "SOME BY MI - 30 Days Miracle Clear Spot Patch [18 pcs]",
        categoria: "Cuidado-Nocturno",
        costoUSD: 3.62,
        precio: 7.99
    },
    {
        imagen: "../images/LashSerum.jpg",
        titulo: "ETUDE - Sérum para Pestañas My Lash Serum [9g]",
        categoria: "Cuidado-Nocturno",
        costoUSD: 5.21,
        precio: 10.99
    }
];


function crearTarjeta(producto){
    return `
    <div class="tarjetas" data-categoria="${producto.categoria}">
        <div class="imagen-fondo">
            <img src="${producto.imagen}" alt="${producto.titulo}" class="imagen-producto">
        </div>
        <hr class="separador">
        <div class="info-producto">
            <h3 class="nombre"> ${producto.titulo}</h3>
            <div class="precios">
                <span class="etiqueta-categoria">${producto.categoria}</span>
                <span class="precio">$ ${producto.precio.toFixed(2)}</span>
            </div>
            <div class="acciones">
                <button class="boton-carrito">
                    <i class="fa-solid fa-bag-shopping"></i>
                    Agregar al carrito
                </button>
                <button class="corazon"><i class="fa-regular fa-heart"></i></button>
            </div>
        </div>
    </div>
    `
}

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-productos');
    const filtros = document.querySelectorAll('.panel .form-check-input');
    const precioMaximo = document.getElementById('precioMaximo');
    const valorPrecio = document.getElementById('valorPrecio');

    mostrarProductos(productos);
    precioMaximo.addEventListener('input', filtrarProductos);

    filtros.forEach(filtro => {
        filtro.addEventListener('change', filtrarProductos);
    });

    function filtrarProductos() {

        const filtrosSeleccionados = Array.from(filtros)
            .filter(filtro => filtro.checked)
            .map(filtro => filtro.id);

        const precio = Number(precioMaximo.value);

        const productosFiltrados = productos.filter(producto => {

            const coincideCategoria =
                filtrosSeleccionados.length === 0 ||
                filtrosSeleccionados.includes(producto.categoria);

            const coincidePrecio =
                producto.precio <= precio;

            return coincideCategoria && coincidePrecio;
        });

        valorPrecio.textContent = precio.toFixed(2);

        if (precio === 0) {
            contenedor.innerHTML = `<p style="text-align: center;">No hay productos en este rango de precio.</p>`;
        } else {
            mostrarProductos(productosFiltrados);
        }}

        function mostrarProductos(listaProductos) {
            contenedor.innerHTML = listaProductos
                .map(producto => crearTarjeta(producto))
                .join('');
        }
});