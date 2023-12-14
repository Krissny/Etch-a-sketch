const div = document.querySelector('.container');
const rgb = document.querySelector('.rgb');
let rg = false;
rgb.onclick = function(){
    console.log(rg);
    console.log("clicked");
    if(rg==true){
        rg = false;
        rgb.style.backgroundColor = 'white';
        rgb.style.color = 'black';
    }
    else{
        rg = true;
        rgb.style.backgroundColor = 'blue';
        rgb.style.color = 'white';
    }
};
createGrid(16, div);

const btn = document.querySelectorAll('.btn');
btn.forEach((e) => {
    e.addEventListener('click', (e) => {
        let newGrid = +(e.currentTarget.textContent[0] + e.currentTarget.textContent[1]);
        createGrid(newGrid,div);

    })
});
function createGrid(newGrid, div) {
    div.innerHTML = '';
    for (let i = 0; i < newGrid * newGrid; i++) {
        const divChild = document.createElement('div');
        if (newGrid == 32) {
            divChild.classList.add('children15');
        }
        else if (newGrid == 48) {
            divChild.classList.add('children10');
        }
        else {
            divChild.classList.add('children30');
        }
        div.appendChild(divChild);
        divChild.addEventListener('mousedown',changeColor);
    }
}
function changeColor(ev){
    if(rg){
        const r = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        ev.currentTarget.style.backgroundColor =`rgb(${r},${b},${g})`;
    }
    else{
        ev.currentTarget.style.backgroundColor= 'black';
    }
}