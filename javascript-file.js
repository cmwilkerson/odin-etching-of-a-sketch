 
let playableGrid= document.querySelector("#gridContainer");
let elementCreation
function buildGrid(sideLength){
    for(let r = 1; r <= sideLength; r++ ) {
    for(let c = 1; c <= sideLength; c++ ){
        elementCreation=document.createElement("div");
        elementCreation.setAttribute("id",`divR${r}C${c}`);
        elementCreation.classList.add("gridPlay");
        elementCreation.style.flex =`1 1 ${(100/sideLength)}%`;
        
        elementCreation.addEventListener('mouseout', () => {
            elementCreation.style.backgroundColor= 'red';
        })



        playableGrid.appendChild(elementCreation);
    }    
}
}

buildGrid(2);
console.log(playableGrid);

