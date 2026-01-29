function createCard(cardTitle, cardDescription, jsonData, datagrama) {
    let element = document.createElement("div");
    let title = document.createElement("h2");
    let value = document.createElement("div");
    let description = document.createElement("div");

    element.classList.add("card");
    value.classList.add("value");
    description.classList.add("info");

    title.textContent = cardTitle;
    value.textContent = jsonData;
    description.textContent = cardDescription;

    let layer = document.createElement("div");
    layer.classList.add("layer");

    if (datagrama) {
        for (let code of datagrama) {
            let datagramacard = document.createElement("img");
            datagramacard.classList.add("gif");
            datagramacard.src = `../media/gifs/${code}.gif`;

            let block = document.createElement("div");
            block.append(datagramacard);
            block.classList.add("block");
            layer.append(block);
        }
    }

    element.append(layer);
    element.append(description);
    element.append(value);
    element.append(title);
    cardRoot.append(element);
}