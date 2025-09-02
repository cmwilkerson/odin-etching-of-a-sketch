function randomColor(){
    console.log("Test");
    const rValue=Math.random() *256;
    const gValue=Math.random() *256;
    const bValue=Math.random() *256;
    return(`rgb(${rValue.toFixed(0)},${gValue.toFixed(0)},${bValue.toFixed(0)})`);
}
function buildGrid(sideLength){
    
    const playableGrid= document.querySelector("#gridContainer");
    for(let r = 1; r <= sideLength; r++ ) {
    for(let c = 1; c <= sideLength; c++ ){

        const elementCreation =document.createElement("div");
        elementCreation.setAttribute("id",`divR${r}C${c}`);
        elementCreation.classList.add("gridPlay");
        elementCreation.style.flex =`1 1 ${(100/sideLength)}%`;
        elementCreation.style.opacity = '0';
        elementCreation.addEventListener('mouseout', () => {
            elementCreation.style.backgroundColor= randomColor();
            elementCreation.style.opacity= parseFloat(elementCreation.style.opacity)+.1;
        });
          elementCreation.addEventListener('mouseover', () => {
            elementCreation.style.backgroundColor= 'blue';
            elementCreation.style.transition= 'background-color 0.3s ease';
        });
        playableGrid.appendChild(elementCreation);
    }    
}
}
const buttonGrid = document.querySelector('#btnGrid');
buttonGrid.addEventListener('click',() =>{
    const playableGrid= document.querySelector("#gridContainer");
    playableGrid.innerHTML='';
    buildGrid(prompt("Playable Grid Size"));
});
const buttonReset = document.querySelector('#btnReset');
buttonReset.addEventListener('click',() =>{
    const playableGrid= document.querySelector("#gridContainer");
    playableGrid.innerHTML='';
});