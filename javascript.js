// constants and enumerations
const colorModeEnum = {
    pickedColor: "pickedColor",
    rainbow: "rainbow",
    progressiveDark: "progressive",
    erase: "erase",
}
const initialGridSize = 16;
const initialColor = "rgb(0,0,0)";
const initalColorMode = colorModeEnum.pickedColor;
const initialButtonsColor = "#F8FAE5";
const selectButtonColor = "#B19470";

// DOM pointers
const mainContainer = document.querySelector("#mainContainer");
const rangeGridSize = document.querySelector("#rangeGridSize");
const pGridSize = document.querySelector("#pGridSize");
const btnBlack = document.querySelector("#btnBlack");
const btnGreyScale = document.querySelector("#btnGreyScale");
const btnRainbow = document.querySelector("#btnRainbow");
const btnReset = document.querySelector("#btnReset");
const btnEraser = document.querySelector("#btnEraser");

// Global variables
let gridSize = initialGridSize;
let colorMode = initalColorMode
let pickedColor = initialColor
let mouseClicked = false;

// Init page 
resetAll();
// btnBlack.addEventListener("click", (e) => { pickedColor = initialColor; colorMode = initalColorMode; });
btnBlack.addEventListener("click", (e) => { setColorModeToBlack(e) });
btnGreyScale.addEventListener("click", (e) => { setColorModeToGreyScale(e) });
btnRainbow.addEventListener("click", (e) => { setColorModeToRainbow(e) });
btnReset.addEventListener("click", (e) => { resetAll() });
btnEraser.addEventListener("click", (e) => { setColorModeToErase(e) });
document.addEventListener("mousedown", (e) => { if (e.button === 0) { mouseClicked = true } });
document.addEventListener("mouseup", (e) => { if (e.button === 0) { mouseClicked = false } });

function setColorModeToBlack(e) {

    pickedColor = initialColor;
    colorMode = initalColorMode;
    resetButtonColor();
    e.target.style.backgroundColor = selectButtonColor;

}
function setColorModeToGreyScale(e) {
    colorMode = colorModeEnum.progressiveDark;
    resetButtonColor();
    e.target.style.backgroundColor = selectButtonColor;
}
function setColorModeToRainbow(e) {
    colorMode = colorModeEnum.rainbow;
    resetButtonColor();
    e.target.style.backgroundColor = selectButtonColor;
}
function setColorModeToErase(e) {
    colorMode = colorModeEnum.erase;
    resetButtonColor();
    e.target.style.backgroundColor = selectButtonColor;
}

function resetButtonColor() {
    let buttons = document.querySelectorAll(".sideBarre");
    for (btn of buttons) {
        btn.style.backgroundColor = initialButtonsColor

    }

}




// Functions
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
function getGridSizeString(gridSize) {
    return `Gridsize : ${gridSize} x ${gridSize}`;
}

function changeGridSize(e) {
    pGridSize.textContent = getGridSizeString(e.target.value);
    gridSize = e.target.value;
    eraseGrid(mainContainer);
    drawGrid(gridSize, mainContainer)
    addHoverEffect(gridSize, mainContainer)

}
function eraseGrid(container) {
    // for (const line of container.querySelectorAll('.cLigne')){

    // }        
    container.innerHTML = null;
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
        case colorModeEnum.erase:
            appliedColor = "rgb(255,255,255)";
            break;
    }
    if (mouseClicked) {
        e.target.style.backgroundColor = appliedColor;
    };
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
function resetAll() {
    gridSize = initialGridSize;
    colorMode = initalColorMode
    pickedColor = initialColor
    gridSize = initialGridSize;
    eraseGrid(mainContainer)
    drawGrid(gridSize, mainContainer);
    addHoverEffect(gridSize, mainContainer)
    pGridSize.textContent = getGridSizeString(gridSize);
    rangeGridSize.addEventListener("change", (e) => { changeGridSize(e) })
    rangeGridSize.value = gridSize;
    resetButtonColor();
    btnBlack.style.backgroundColor = selectButtonColor;
}



// TODO : add color pick to be able to pickup color
// TODO : add button to switch grid on and Off
// TODO : map grey functionality to a button
// TODO : add eraser functionnality
// TODO : map eraser functionality to a button
// TODO: review css for global page


/// add event to Map="btnBlack" to swithc color mode to black
/// add event to Map= id="btnRainbow"
/// add event to Map= id="btnGreyScale"
/// add event to Map= id="btnReset"

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