
const container = document.querySelector("#container");
const numButt = document.querySelector("#choose");

// create the divs for the grid
function createDivs(numDivs) {

    const blockSize = 960 / numDivs;

    for (i = 0; i < numDivs * numDivs; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.style.width = `${blockSize}px`;
        block.style.height = `${blockSize}px`;
        block.style.opacity = 0;
        block.addEventListener("mouseover", () => changeColor(block));
        container.appendChild(block);
    }
}

function changeColor(block) {
    block.style.backgroundColor = getRandomColor();

    let currentOpacity = parseFloat(block.style.opacity); 
    currentOpacity = Math.min(currentOpacity + 0.1, 1); 
    block.style.opacity = currentOpacity;
}

function promptNumBlocks() {
    let numDivs = parseInt(prompt("Enter the number of blocks."));
    createDivs(numDivs);
}


numButt.addEventListener("click", promptNumBlocks);

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

