const div = document.querySelector('.container');
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
        divChild.addEventListener('mousedown', (e) => {
            e.currentTarget.classList.add('black');
        });
    }
}