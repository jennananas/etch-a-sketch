const grid = document.querySelector('.grid-container')

function setNewGrid(gridSize){
    grid.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); 
                          grid-template-rows: repeat(${gridSize}, 1fr);`;

    console.log(grid.hasChildNodes())
    if (grid.hasChildNodes()){
        while(grid.hasChildNodes()){
            grid.firstChild.remove();
        }
    }
    for (let i=0; i<gridSize**2; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.toggle('grid-element');
        
        grid.appendChild(gridElement);

    }

    const pixels = document.querySelectorAll('.grid-element')
    pixels.forEach((pixel) => pixel.addEventListener('mouseover', ()=> {
    pixel.classList.add('hovered');
    }))
}

function askSize(){
    do {
        gridSize = prompt("Grid size ? Enter a number <100 and >0");
        
    }
    while (gridSize>=100 || gridSize<=0);
    setNewGrid(gridSize);
}

setNewGrid(16)


