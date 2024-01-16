
let gridSize = 16;

const mainContainer = document.querySelector("#mainContainer");


drawGrid(gridSize, mainContainer);
addHoverEffect(gridSize, mainContainer)

function drawGrid(gridSize, container) {

    // draw a gridSize * gridSize grid
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

function addHoverEffect(gridSize, container) {
    for (const line of container.querySelectorAll('.cLigne')) {
        console.log("juste un autre test")
        // const listColumns = line.children;
        for (const column of line.querySelectorAll('.cColumn')) {
            column.addEventListener("mouseover", (e) => { setColor(e, "red") });
            console.log("getThere");
        }
    }

}
function setColor(e, color) {
    e.target.style.backgroundColor = color;

}



// Obsolete code 
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