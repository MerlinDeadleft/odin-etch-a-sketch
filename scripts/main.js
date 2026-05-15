const DEFAULT_GRID_SIZE = 16;

let GRID_SIZE = DEFAULT_GRID_SIZE;
let randomColor = false;

const container = document.querySelector("#container");
const resizeButton = document.querySelector("#resizeButton");
const randomColorButton = document.querySelector("#randomColorButton");

//Main
resizeButton.addEventListener("click", handleResizeButtonClicked);
randomColorButton.addEventListener("click", handleRandomColorButtonClicked);
setUpGrid();

//Functions
function setUpGrid() {
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
    e.target.style.backgroundColor = randomColor ? `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` : "black";
}

function handleResizeButtonClicked() {
    let newGridSize = parseInt(prompt("How many square per side big should the grid be? (min: 1, max: 100)", "16"));
    
    if(Number.isNaN(newGridSize)) {
        alert("Entered value is not a number!\nPlease enter a valid number! (min: 1, max: 100)");
        return;
    }

    if(newGridSize < 1 || newGridSize > 100) {
        alert("Entered value is outside allowed range!\nPlease enter a valid number! (min: 1, max: 100)");
        return;
    }

    GRID_SIZE = newGridSize;
    container.replaceChildren();
    setUpGrid();
}

function handleRandomColorButtonClicked() {
    randomColor = !randomColor;

    randomColorButton.textContent = `Random Color(${(randomColor ? "On" : "Off")})`;
}