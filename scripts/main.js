const DEFAULT_GRID_SIZE = 16;

let GRID_SIZE = DEFAULT_GRID_SIZE;
const container = document.querySelector("#container");
const resizeButton = document.querySelector("#resizeButton");

//Main

setUpGrid();

resizeButton.addEventListener("click", handleResizeButtonClicked);

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

    div.addEventListener("mouseenter", () =>{
        div.style.backgroundColor = "black";
    })

    return div;
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