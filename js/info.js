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
    let nodeLeftPanel = document.getElementById("leftPanel");
    let nodeRightPanel = document.getElementById("rightPanel");

    let nodeTitle = document.createElement("p");
    nodeTitle.classList.add("endpointElement");
    nodeTitle.textContent = data.endpoints[0].title;
    nodeLeftPanel.appendChild(nodeTitle);

    let nodeDescription = document.createElement("p");
    nodeDescription.classList.add("descriptionElement");
    nodeDescription.innerHTML = `<i>${data.endpoints[0].endpoint}</i><br><br>${data.endpoints[0].description};`
    nodeRightPanel.appendChild(nodeDescription);
}

function getJsonData() {
    fetch("../json/info.json")
        .then(response => response.json())
        .then(data => setElements(data))
}

getJsonData();