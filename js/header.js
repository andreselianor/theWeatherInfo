class MyHeader extends HTMLElement {
    connectedCallback() {
        fetch("./html/header.html")
            .then(response => response.text())
            .then(html => this.innerHTML = html)
    }
}

customElements.define("my-header", MyHeader);