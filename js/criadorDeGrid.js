const classPixel = "pixel";
const classGrid = "grid";

const container = document.querySelector(".container")

function criarStylePadrao(tamanhoGrid) {
    const style = document.createElement("style");

    let tamanhoPixel = tamanhoGrid * 100 / (tamanhoGrid*tamanhoGrid);
    tamanhoPixel = tamanhoPixel.toString().concat("%");

    //Criando linhas
    let textoStyleGrid = ".grid{display: grid; width: 100%; height: 100%; grid-template-rows: $;}";
    //O loop deve rodar uma vez a menos, pois o textoStyleGrid já possui um caractere "$;}" logo de início
    for (let i = 1; i < tamanhoGrid; i++) {
        if (textoStyleGrid.includes("$;}")) {
           let novaString = textoStyleGrid.replace(";}", " $;}");
           textoStyleGrid = novaString;
        }
    }

    //Criando colunas
    textoStyleGrid = textoStyleGrid.replace(";}", "; grid-template-columns: $;}");

    for (let i = 1; i < tamanhoGrid; i++) {
        if (textoStyleGrid.includes("$;}")) {
            let novaString = textoStyleGrid.replace(";}", " $;}");
            textoStyleGrid = novaString;
        }
    }

    //Alinhando textos
    textoStyleGrid = textoStyleGrid.concat(".grid > * {display: flex; align-items: center; justify-content: center;}");

    textoStyleGrid = textoStyleGrid.replaceAll("$", tamanhoPixel);

    style.innerHTML = textoStyleGrid;

    document.head.appendChild(style);
}

function criarGridQuadrada(tamanhoGrid) {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add(classGrid);

    //Criando "pixels"
    for (let i = 1; i <= tamanhoGrid*tamanhoGrid; i++) {
        const novoPixel = document.createElement("div");
        novoPixel.classList.add(classPixel.concat(i));

        const novoparagrafo = document.createElement("p");
        novoparagrafo.classList.add("numeroPixel")
        novoparagrafo.appendChild(document.createTextNode(i));

        novoPixel.appendChild(novoparagrafo);

        gridContainer.appendChild(novoPixel);
    }

    container.appendChild(gridContainer);

    criarStylePadrao(tamanhoGrid);
}
