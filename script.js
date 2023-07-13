// Grid
const grid = document.querySelector('.grid');

// Tell if mouse is down
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Create Grid
function createGrid (boxNum) {
    for (i = 0; i < (boxNum*boxNum); i++) {
        const blocks = document.createElement('div');
        blocks.classList.add('grid-blocks');
        blocks.addEventListener('mouseover', draw)

        function draw (e) {
            if (e.type === 'mouseover' && !mouseDown) {
                return;
            } else {
                blocks.setAttribute('style', 'background-color: black');
            }
        }

        grid.appendChild(blocks);
    }
    grid.setAttribute('style', `grid-template-columns: repeat(${boxNum}, 1fr)`);
}

createGrid(16);