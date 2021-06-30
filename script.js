const gridContainer = document.querySelector("#grid-container");


window.addEventListener("load",createDefaultGrid);

function createDefaultGrid() {
    createGrid(16);    
}

function createGrid(size){
    for(let i=0; i < size*size; i++){
        const gridElement = document.createElement("div");
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        gridElement.classList.add("grid-elements");
        gridElement.addEventListener("mouseover",changeColor);
        gridContainer.appendChild(gridElement);
    }
}

function changeColor() {
    this.style.backgroundColor = "#000000";
}