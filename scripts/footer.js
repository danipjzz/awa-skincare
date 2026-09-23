class AwaFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <a href=#inicio><h4>Inicio de página</h4></a>
        <div>
         <h2>Contacto</h2>
         <p>
            hola@awa-skincare.com <br>
            +57 300 456 7821 <br>
            Bogotá, Colombia
         </p>
        </div>

        <div>
         <h2>About Us</h2>
         <p>
            Quiénes somos <br>
            Nuestra misión <br>
            Nuestra visión
         </p>
        </div>

        <div>
         <h2>Ayuda</h2>
         <p>
            Preguntas frecuentes <br>
            Pedidos <br>
            Cambios y devoluciones
         </p>
        </div>
        `;
    }
}
customElements.define('awa-footer', AwaFooter);
