let playableGrid= document.querySelector("#gridContainer");
console.log(playableGrid);
let [rowGrid,colGrid]=[4,4];
let elementCreation

for(let r = 1; r <= rowGrid; r++ ) {
    for(let c = 1; c <= colGrid; c++ ){
        console.log(`Current Row: ${r} Current Column:${c}`);
        elementCreation=document.createElement("div");
        elementCreation.setAttribute("id",`divR${r}C${c}`);
        elementCreation.classList.add("gridPlay");
        elementCreation.textContent=`R${r}C${c}`
        playableGrid.appendChild(elementCreation);
    }
}
