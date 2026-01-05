class MyHeader extends HTMLElement {
    connectedCallback() {
        fetch("./header.html")
            .then(response => response.text())
            .then(html => this.innerHTML = html)
    }
}

customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
    connectedCallback() {
        fetch("./footer.html")
            .then(response => response.text())
            .then(html => this.innerHTML = html)
    }
}

customElements.define("my-footer", MyFooter);