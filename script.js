const grid = document.querySelector(".grid-container")
const gridSize = 256;

for (let i=0; i<gridSize; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.toggle('grid-element');
    grid.appendChild(gridElement);
}
