
let gridSize = 32;
// let color = red;
const colorModeEnum = {
    pickedColor: "pickedColor",
    rainbow: "rainbow",
    progressiveDark: "progressive",
}
let colorMode = colorModeEnum.progressiveDark;
let pickedColor = "black";

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
            newDiv.style.backgroundColor = "rgb(255,255,255)"; //It's important to initiate the rgb value for later function that will add grey to the actual color
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
            column.addEventListener("mouseover", (e) => { setColor(e, colorMode, pickedColor) });
            console.log("getThere");
        }
    }

}
function setColor(e, l_colorMode, l_pickedColor) {
    let appliedColor;
    switch (l_colorMode) {
        case colorModeEnum.pickedColor:
            appliedColor = l_pickedColor;
            break;
        case colorModeEnum.progressiveDark:
            appliedColor = addColorRatio(e.target.style.backgroundColor);
            break;
        case colorModeEnum.rainbow:
            appliedColor = getRandomRGB();
            break;
    }
    e.target.style.backgroundColor = appliedColor;

}
function getRandomInt(minVal, maxVal) {
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
function getRandomRGB() {
    let r = getRandomInt(0, 255);
    let g = getRandomInt(0, 255);
    let b = getRandomInt(0, 255);
    return `rgb(${r},${g},${b})`;

}
function addColorRatio(currentColor) {
    //Get rgb values
    const regex = /[0-9]{1,3}/g;
    let rgbTab = currentColor.match(regex);
    let r = rgbTab[0]
    let g = rgbTab[1];
    let b = rgbTab[2];

    // Add +10% of Dark (10% of 255, not of the current value)
    r = Math.max(0, Math.floor((r * 10 - 255) / 10));
    g = Math.max(0, Math.floor((g * 10 - 255) / 10));
    b = Math.max(0, Math.floor((b * 10 - 255) / 10));

    //  Return new "greyer" rgb <-- not sure greyer is an actual word but still like it !

    return `rgb(${r},${g},${b})`
}



// TODO : add grid size display based on slider value 
// TODO : resize grid when slider changes
// TODO : add color pick to be able to pickup color
// TODO : add button to switch grid on and Off
// TODO : map grey functionality to a button
// TODO : add eraser functionnality
// TODO : map eraser functionality to a button
// TODO: review css for global page



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