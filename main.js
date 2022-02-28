const container = document.querySelector('.container');

for (let i = 1; i <= 256; i++) {
    var grid = document.createElement('div');
    grid.className = 'grid';
    grid.setAttribute('id', i)
    // grid.innerText = i

    container.appendChild(grid);
}

for (let i = 1; i <= 256; i++) {
    const gridElement = document.getElementById(i);
    gridElement.addEventListener('mouseover', function(){gridElement.className = 'hover'});
}

document.querySelector('button').addEventListener('click',function(){clearAll()})

function clearAll(){
    for (let i = 1; i <=256; i++){
        document.getElementById(i).classList.remove('hover');
    }
}