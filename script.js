
const container = document.querySelector("#container");

// create the divs for the grid
function createDivs(numDivs) {
    for (i = 0; i < numDivs; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.addEventListener("mouseover", changeColor(block));
        container.appendChild(block);
    }
}

function changeColor(block) {
    block.style.backgroundColor = "green";

}

function promptNumBlocks() {
    let numDivs;
    let text = prompt("Enter the number of blocks.");

}

createDivs(16);

const numButt = document.querySelector("#choose");
numButt.addEventListener("click", promptNumBlocks);