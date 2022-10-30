let canvas = document.querySelector(".canvas");
for(let i=0; i< 16; i++) {
    let cells = document.createElement("div");
    cells.classList.add("cells");
    canvas.appendChild(cells);
}