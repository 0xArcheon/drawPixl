
let createGrid = ()=> {
    let canvas = document.querySelector(".canvas");
    for(let i=0; i< 16*16; i++) {
        let cells = document.createElement("div");
        cells.classList.add("cells");
        canvas.appendChild(cells);
        }   
}
createGrid();