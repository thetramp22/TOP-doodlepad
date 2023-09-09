const gridContainer = document.getElementById('grid-container');

const defaultGridSize = 16;

function createGrid(size) {
    
    let pixelWidth = 640/size + "px";
    let pixelHeight = 640/size + "px";


    for(let i = 0; i < Math.pow(size, 2); i++) {
        const div = document.createElement('div');
        const widthHeight = document.createAttribute('style');

        div.classList.add('grid-pixel');
        widthHeight.value = `width: ${pixelWidth}; height: ${pixelHeight};`;
        div.setAttributeNode(widthHeight);

        div.addEventListener('mouseover', colorPixel)

        gridContainer.appendChild(div);
    }
}

function colorPixel(e) {
    e.target.style.backgroundColor = 'black';
}

function clearGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function resetGrid(e) {
    const currentSize = Math.pow(document.getElementById('grid-container').childElementCount, 0.5);

    clearGrid();
    createGrid(currentSize);
}

function changeGridSize(e) {
    let size = Number(window.prompt(
        "Enter new grid size between 1 and 100", ""
    ));
    
    while(size < 1 || size > 100) {
        size = Number(window.prompt(
            "Invalid, please enter new grid size between 1 and 100", ""
        ));
    }


    clearGrid();
    createGrid(size);
}

function showGrid(e) {
    const grid = document.querySelectorAll('.grid-pixel');

    grid.forEach(pixel => pixel.classList.toggle('show-grid'));
}

// Event Listeners

const gridSizeBtn = document.querySelector('.grid-size-btn');
const resetBtn = document.querySelector('.reset-btn');
const showGridBtn = document.querySelector('.show-grid-btn');

gridSizeBtn.addEventListener('click', changeGridSize);
resetBtn.addEventListener('click', resetGrid);
showGridBtn.addEventListener('click', showGrid)

createGrid(defaultGridSize);