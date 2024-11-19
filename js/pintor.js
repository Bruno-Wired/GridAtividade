const grid = document.querySelector(".grid")

//  [inicio, fim, cor]

function pintarPixel(...args) {
    for (let i = 0; i < args.length; i++) {
        let inicio = args[i][0]
        let fim = args[i][1]
        let cor = args[i][2]

        //Caso "fim" não exista, ou seja, caso seja algo assim [inicio, cor]
        if (args[i].length < 3) {
            cor = fim
            fim = inicio
        }

        for (let j = inicio; j <= fim; j++) {
            const pixel = document.querySelector(".pixel".concat(j))
            pixel.style.backgroundColor = cor
        }
    }
}