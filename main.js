const container = document.querySelector('.container');
let gridElement;
let active = false;
let rainbow = false;

createGrid(16)

function createGrid(size) {
    deleteAll()
    for (let i = 1; i <= (size * size); i++) {
        var grid = document.createElement('div');
        grid.className = 'grid';
        grid.setAttribute('id', i)
        // grid.innerText = i

        container.appendChild(grid);
    }

    container.style.setProperty("--size", size);
    active = false;
    gridElement = document.querySelectorAll('.grid');
}



container.addEventListener('click', toggle);

function toggle() {
    active = !active;
    start();
};

function start() {
    if (active === true && rainbow === false) {
        gridElement.forEach(i => i.addEventListener('mouseover', sketch));
    } else if (active === true && rainbow === true){
        gridElement.forEach(i => i.addEventListener('mouseover', rainbowSketch));
    } else stopSketch();
};

document.getElementById('clear').addEventListener('click', function () { clearAll() });
document.getElementById('rainbow').addEventListener('click', function () { rainbow = true });

function clearAll() {
    gridElement.forEach(i => i.style.backgroundColor = 'white');
    rainbow = false;
    active = false;
    stopSketch();
}

function deleteAll() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function sketch() {
    this.style.backgroundColor = 'black';
};

function rainbowSketch() {
    this.style.backgroundColor = ('#'+Math.floor(Math.random()*16777215).toString(16));
};

function stopSketch() {
    gridElement.forEach(i => i.removeEventListener('mouseover', sketch));
    gridElement.forEach(i => i.removeEventListener('mouseover', rainbowSketch));
};

var slider = document.getElementById("myRange");
var output = document.querySelectorAll('.slidevalue');
output.forEach(x => x.innerText = slider.value);

slider.oninput = function() {
    output.forEach(x => x.innerText = slider.value);
    createGrid(slider.value)
}