class MyFooter extends HTMLElement {
    connectedCallback() {
        fetch("./html/footer.html")
            .then(response => response.text())
            .then(html => this.innerHTML = html)
    }
}


customElements.define("my-footer", MyFooter);