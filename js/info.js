class MyHeader extends HTMLElement {
    connectedCallback() {
        fetch("./header.html")
            .then(repsonse => repsonse.text())
            .then(html => this.innerHTML = html)
    }
}

customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
    connectedCallback() {
        fetch("./footer.html")
            .then(repsonse => repsonse.text())
            .then(html => this.innerHTML = html)
    }
}

customElements.define("my-footer", MyFooter);

function setElements(data) {
    let nodeCentralPanel = document.getElementById("centralPanel");

    data.endpoints.map(element => {
        let container = document.createElement("div");
        container.id = "element";

        let nodeTitle = document.createElement("p");
        nodeTitle.classList.add("endpointElement");
        nodeTitle.textContent = element.title;

        let nodeDescription = document.createElement("p");
        nodeDescription.classList.add("descriptionElement");
        nodeDescription.innerHTML = `<i><a href="${element.endpoint}" target="_blank">${element.endpoint}<a/></i><br><br>${element.description}`


        container.append(nodeTitle);
        container.append(nodeDescription);
        nodeCentralPanel.appendChild(container);
    });
}

function getJsonData() {
    fetch("../json/info.json")
        .then(response => response.json())
        .then(data => setElements(data))
}

getJsonData();