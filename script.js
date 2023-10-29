const div = document.querySelector('.container');
let prev = 256;
for(let i=0 ; i<256; i++){
    const divChild = document.createElement('div');
    divChild.classList.add('children');
    div.appendChild(divChild);
}
const btn = document.querySelectorAll('.btn');
btn.forEach((e)=> { e.addEventListener('click', ()=>{
    let newGrid = +( e.textContent[0] + e.textContent[1]);
    console.log(newGrid);
    if(newGrid != Math.sqrt(prev)){
        for(let i=0; i<prev; i++){
            div.removeChild(div.lastChild);
        }
        for(i =0; i<newGrid*newGrid; i++){
            const divChild = document.createElement('div');
            divChild.classList.add('children');
            if(newGrid== 32){
                divChild.style.width = '15px';
                divChild.style.height = '15px';
            }
            else if(newGrid ==48){
                divChild.style.width = '10px';
                divChild.style.height = '10px';
            }
            else{
                divChild.style.width = '30px';
                divChild.style.height = '30px';
            }
            div.appendChild(divChild);
        }
        prev = newGrid*newGrid;
    }
})})