// Grid
const grid = document.querySelector('.grid');

// Create Grid
function createGrid (boxNum) {
    for (i = 0; i < (boxNum*boxNum); i++) {
        const blocks = document.createElement('div');
        blocks.classList.add('grid-blocks')
        grid.appendChild(blocks);
    }
    grid.setAttribute('style', `grid-template-columns: repeat(${boxNum}, 1fr)`);
}

createGrid(4);