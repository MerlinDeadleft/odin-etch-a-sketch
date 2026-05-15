const DEFAULT_GRID_SIZE = 16;

let GRID_SIZE = DEFAULT_GRID_SIZE;
let randomColor = false;
let progressiveOpacity = false;

const container = document.querySelector("#container");
const resizeButton = document.querySelector("#resize-button");
const randomColorButton = document.querySelector("#random-color-button");
const progressiveOpacityButton = document.querySelector("#progressive-opacity-button");
const clearGridButton = document.querySelector("#clear-grid-button");

//Main
resizeButton.addEventListener("click", handleResizeButtonClicked);
randomColorButton.addEventListener("click", handleRandomColorButtonClicked);
progressiveOpacityButton.addEventListener("click", handleProgressiveOpacityButtonClicked);
clearGridButton.addEventListener("click", setUpGrid);
setUpGrid();

//Functions
function setUpGrid() {
    container.replaceChildren();

    let gridItems = [];
    for(let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
        div = setUpGridItem();
        gridItems.push(div);
    }

    container.append(...gridItems);
}

function setUpGridItem() {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    let size = container.clientWidth / GRID_SIZE;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    div.addEventListener("mouseenter", handleGridItemMouseEnter)

    return div;
}

function handleGridItemMouseEnter(e) {
    let target = e.target;
    let r = randomColor ? Math.random() * 255 : 0;
    let g = randomColor ? Math.random() * 255 : 0;
    let b = randomColor ? Math.random() * 255 : 0;
    let a = 1;

    if(progressiveOpacity)
    {
        let backgroundColor = getComputedStyle(target).getPropertyValue("background-color");
        if(backgroundColor.startsWith("rgba")) {
            let split = backgroundColor.split(",");
            let opacity = parseFloat(split[split.length - 1].replace(")", ""));
            opacity += 0.1;
            a = opacity;
        }
        console.log(backgroundColor);
    }

    target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
}

function handleResizeButtonClicked() {
    let promptResult = prompt("How many squares per side big should the grid be? (min: 1, max: 100)", "16");
    if(promptResult === null) {
        return;
    }
    
    let newGridSize = parseInt(promptResult);
    if(Number.isNaN(newGridSize)) {
        alert("Entered value is not a number!\nPlease enter a valid number! (min: 1, max: 100)");
        return;
    }

    if(newGridSize < 1 || newGridSize > 100) {
        alert("Entered value is outside allowed range!\nPlease enter a valid number! (min: 1, max: 100)");
        return;
    }

    GRID_SIZE = newGridSize;
    setUpGrid();
}

function handleRandomColorButtonClicked() {
    randomColor = !randomColor;

    randomColorButton.textContent = `Random Color(${(randomColor ? "On" : "Off")})`;
}

function handleProgressiveOpacityButtonClicked() {
    progressiveOpacity = !progressiveOpacity;

    progressiveOpacityButton.textContent = `Progressive Opacity(${(progressiveOpacity ? "On" : "Off")})`;
}