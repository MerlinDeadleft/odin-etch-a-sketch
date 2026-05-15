const GRID_SIZE = 16 * 16;
const container = document.querySelector("#container");

for(let i = 0; i < GRID_SIZE; i++) {
    div = setUpGridItem();
    container.appendChild(div);
}

function setUpGridItem() {
    const div = document.createElement("div");
    div.classList.add("grid-item");

    div.addEventListener("mouseenter", () =>{
        div.style.backgroundColor = "black";
    })

    return div;
}