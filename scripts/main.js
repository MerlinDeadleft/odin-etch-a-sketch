const GRID_SIZE = 16 * 16;
const container = document.querySelector("#container");

for(let i = 0; i < GRID_SIZE; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    container.appendChild(div);
}