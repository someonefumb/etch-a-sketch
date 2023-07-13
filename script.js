// Grid
const grid = document.querySelector('.grid');
let size = 16;

// Colors
let blackColor = true;
let rainbowColor = false;
let monotoneColor = false;
let eraserColor = false;

// Buttons
const gridSizeBtn = document.querySelector('#gridSizeBtn');
let blackBtn = document.querySelector('#blackBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const monotoneBtn = document.querySelector('#monotoneBtn');
const eraserBtn = document.querySelector('#eraserBtn');
const resetBtn = document.querySelector('#resetBtn');

const btns = document.querySelectorAll('button.colors');
btns.forEach((button) => {
    button.addEventListener('click', () => {
        blackColor = false;
        rainbowColor = false;
        monotoneColor = false;
        eraserColor = false;
        switch(button.id) {
            case 'blackBtn':
                blackColor = true;
                break;
            case 'rainbowBtn':
                rainbowColor = true;
                break;
            case 'monotoneBtn':
                monotoneColor = true;
                break;
            case 'eraserBtn':
                eraserColor = true;
                break;
        }
    });
});

// Sets grid size
function gridSize() {
    size = +prompt("Grid Size", '');
    if (typeof size === 'number' && size <= 100 && size > 0) {
        reset();
    } else {
        alert('ERROR');
    }
}

// Reset
function reset() {
    removeAllChildNodes(grid);
    createGrid(size);
}

// Removes all color
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Tell if mouse is down
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Create Grid
function createGrid (boxNum) {
    for (i = 0; i < (boxNum*boxNum); i++) {
        const blocks = document.createElement('div');
        blocks.classList.add('grid-blocks');

        // Draw function
        blocks.addEventListener('mouseover', draw);
        function draw (e) {
            if (e.type === 'mouseover' && !mouseDown) {
                return;
            } else if (blackColor === true) {
                blocks.setAttribute('style', 'background-color: black');
            } else if (rainbowColor === true) {
                blocks.setAttribute('style', `background-color: ${'#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`);
            }  else if (monotoneColor === true) {
                blocks.setAttribute('style', `background-color: black; opacity: ${(parseFloat(this.style.opacity) || 0) + 0.1}`);
            }  else if (eraserColor === true) {
                blocks.setAttribute('style', 'background-color: white');
            } 
        }

        // Show when hovering
        blocks.addEventListener('mouseenter', () => {
            blocks.classList.add('hovering');
        });
        blocks.addEventListener('mouseleave', () => {
            blocks.classList.remove('hovering');
        });

        grid.appendChild(blocks);
    }
    grid.setAttribute('style', `grid-template-columns: repeat(${boxNum}, 1fr)`);
}

createGrid(size);