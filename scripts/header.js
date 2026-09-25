class AwaHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header id="inicio">
        <a href="/index.html">
            <img src="../images/awa.png" alt="logo">
        </a>
        <input type="checkbox" id="menu" class="menu">
        <label for="menu" class="barras">
            <i class="fa-solid fa-bars"></i>
        </label>
        <nav>
            <div class="iconos-menu">
                <a href="/index.html">
                    <i class="fa-solid fa-house"></i>
                    Inicio
                </a>
                <a href="../Content/tienda.html">
                    <i class="fa-solid fa-bag-shopping"></i>
                    Tienda
                </a>
                <a href="/Content/testimonios.html">
                    <i class="fa-regular fa-comment-dots"></i>
                    Testimonios
                </a>
                <a href="/Content/contruccion.html">
                    <i class="fa-regular fa-face-smile"></i>
                    Análisis de piel
                </a>
            </div>
            <div class="usuario">
                <i class="fa-solid fa-user"></i>
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </nav>
    </header>
        `;
    }
}
customElements.define('awa-header', AwaHeader);
