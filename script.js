const div = document.querySelector('.container');
let prev = 256;  // starting grid size 16 * 16

//initial grid creation
for(let i=0 ; i<256; i++){
    const divChild = document.createElement('div');
    divChild.classList.add('children30');
    div.appendChild(divChild);
}

const btn = document.querySelectorAll('.btn');
btn.forEach((e)=> { e.addEventListener('click', (e)=>{
    let newGrid = +( e.currentTarget.textContent[0] + e.currentTarget.textContent[1]);
    if(newGrid != Math.sqrt(prev)){
        for(let i=0; i<prev; i++){
            div.removeChild(div.lastChild);
        }
        for(let i =0; i<newGrid*newGrid; i++){
            const divChild = document.createElement('div');
            if(newGrid== 32){
                divChild.classList.add('children15');
            }
            else if(newGrid ==48){
                divChild.classList.add('children10');
            }
            else{
                divChild.classList.add('children30');
            }
            div.appendChild(divChild);
        }
        
    }
    prev = newGrid*newGrid;
})});
const children30 = document.querySelectorAll('.children30');
const children15 = document.querySelectorAll('.children15');

children30.forEach((e)=>{e.addEventListener('mousedown',(e)=>{
    console.log(e.currentTarget);
    e.currentTarget.classList.add('black');
} )})
children15.forEach((e)=>{e.addEventListener('mousedown',(e)=>{
    console.log(e.currentTarget);
    e.currentTarget.classList.add('black');
} )})