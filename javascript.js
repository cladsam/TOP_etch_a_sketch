
let gridSize = 20;
// let squareSize = "30"

const mainContainer = document.querySelector("#mainContainer");


drawGrid(gridSize, mainContainer);



function drawGrid(gridSize, container) {

    // draw a gridSize * gridSize 
    // 
    //     let newLine = document.createElement('div');
    //     newLine.style.border = "0.5px solid black";
    //     newLine.style.height = squareSize + "px";
    //     newLine.style.width = (squareSize * gridSize) + "px";
    //     newLine.style.margin = "0";
    //     newLine.style.padding = "0";
    //     newLine.style.color = "white";
    //     newLine.style.display = "flex";
    //     newLine.innerHTML = "flex:1"
    //     // newLine.style.

    //     for (let colonnes = 1; colonnes <= gridSize; colonnes++) {
    //         let newDiv = document.createElement('div');
    //         newDiv.style.border = "0.5px solid black";
    //         // newDiv.style.borderTop = "0";
    //         // newDiv.style.borderBottom = "0";
    //         newDiv.style.margin = "0";
    //         newDiv.style.padding = "0";
    //         newDiv.style.color = "white";
    //         newDiv.style.boxSizing = "border-box"
    //         // newDiv.style.height = squareSize + "px";
    //         // newDiv.style.width = squareSize + "px";
    //         newDiv.innerHTML = "flex:1";
    //         newLine.appendChild(newDiv);
    //         console.log(`Colonne : ${colonnes}ligne : ${lignes}`);


    //     }
    //     container.appendChild(newLine);
    // }
    // TODO: create gridSize * grid Size grid
    // TODO: assign cOlumn css class to all columns in the grid
    // TODO: assign cLine Classe to all Line div in the grid

    for (let lignes = 1; lignes <= gridSize; lignes++) {
        let newLine = document.createElement('div');
        newLine.className = "cLigne";
        for (let colonnes = 1; colonnes <= gridSize; colonnes++) {
            let newDiv = document.createElement('div');
            newDiv.className = "cColumn"
            newLine.appendChild(newDiv);
        }
        container.appendChild(newLine);
    }
}
