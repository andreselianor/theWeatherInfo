function setElements(data) {
    data.endpoints.map(element => {
        let nodeCentralPanel = document.getElementById("centralPanel");
        let container = document.createElement("div");
        container.id = "element";

        let nodeTitle = document.createElement("p");
        nodeTitle.classList.add("endpointElement");
        if (element.title == "'title'")
            nodeTitle.classList.add("highlight");
        nodeTitle.textContent = element.title;

        let nodeDescription = document.createElement("p");
        nodeDescription.classList.add("descriptionElement");
        if (element.description == "'description'")
            nodeDescription.classList.add("highlight");
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