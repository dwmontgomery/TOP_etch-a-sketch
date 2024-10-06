
const container = element.querySelector("#container");
// create the divs for the grid

function createDivs(numDivs) {
    for (i = 0; i < numDivs; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        container.appendChild(block);
    }
}