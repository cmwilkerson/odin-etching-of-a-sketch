let playableGrid= document.querySelector("#gridContainer");
console.log(playableGrid);
let elementCreation
function buildGrid(sideLength){
    for(let r = 1; r <= sideLength; r++ ) {
    for(let c = 1; c <= sideLength; c++ ){
        console.log(`Current Row: ${r} Current Column:${c}`);
        elementCreation=document.createElement("div");
        elementCreation.setAttribute("id",`divR${r}C${c}`);
        elementCreation.classList.add("gridPlay");
        elementCreation.textContent=`R${r}C${c}`
        playableGrid.appendChild(elementCreation);
    }
}
}
buildGrid(4);