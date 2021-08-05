const defaultColor = "#000000";
const defaultSketchToolColor = "whitesmoke";
const defaultMode = "color";
const defaultSize = 16;


let mode = defaultMode;

const gridContainer = document.querySelector("#grid-container");
const resetBtn = document.querySelector("#reset");
const rainbowBtn = document.querySelector("#rainbow");
const colorBtn = document.querySelector("#color");
const sizeLine = document.querySelector("#size-line");
const sizeBullet = document.querySelector("#size-bullet");
const gridDisplay = document.querySelector("#gridDisplay");
const colorPicker = document.querySelector("#colorPicker");


window.addEventListener("load",createDefaultGrid);

resetBtn.addEventListener("click",clearGrid);
rainbowBtn.addEventListener("click",setRainbow);
colorBtn.addEventListener("click",setColor);
sizeLine.addEventListener("input",changeSize, false);
gridDisplay.addEventListener("change",setDisplayGrid);

function createDefaultGrid() {
    createGrid(defaultSize);    
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
    if (mode == "rainbow"){
        randomR = Math.floor(Math.random()*256);
        randomG = Math.floor(Math.random()*256);
        randomB = Math.floor(Math.random()*256);
        this.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
    }
    else if (mode == "color") {
        this.style.backgroundColor = colorPicker.value;
    }
}

function clearGrid() {
   const gridElementList =  gridContainer.querySelectorAll(".grid-elements");

   gridElementList.forEach(element =>
       element.style.backgroundColor = "#FFFFFF"
   );
}

function setRainbow() {
    if(mode != "rainbow"){
        mode = "rainbow";
        this.style.backgroundColor = "rgb(194, 179, 178)";
        colorBtn.style.backgroundColor = defaultSketchToolColor;
    }
}

function setColor() {
    if(mode != "color"){
        mode = "color";
        this.style.backgroundColor = "rgb(194, 179, 178)";
        rainbowBtn.style.backgroundColor = colorPicker.value;
    }
}

function changeSize() {
    sizeBullet.innerHTML = sizeLine.value;
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(sizeLine.value);
    setDisplayGrid();
}

function setDisplayGrid() {
    const gridElementList =  gridContainer.querySelectorAll(".grid-elements");

    if(gridDisplay.checked == true){
   gridElementList.forEach(element =>
       element.style.borderStyle = "solid"
   );
    }else if(gridDisplay.checked == false){
        gridElementList.forEach(element =>
            element.style.borderStyle = "none"
        );
    }
}