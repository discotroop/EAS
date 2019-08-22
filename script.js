let gridContainer = document.querySelector("#grid-container")

let gridBox = document.createElement('div');
gridBox.setAttribute('class', 'gridBox');

let newGridClick =  document.querySelector("button");
newGridClick.addEventListener('click', newGrid());

function populateGrid (num) {
    let i = 0;
    while (i < num) {
        gridContainer.appendChild(gridBox.cloneNode());
        i++
    };
};

populateGrid(256);

function newGrid () {
    var gridWall = parseInt(window.prompt("How long do you want each side to be?","1"),10); 
};

//https://github.com/nihirag/etch-a-sketch/blob/master/script.js



// try it with a for loop ... never using forEach again!
for (let i = 0; i < gridContainer.children.length; i++) {
    gridContainer.children[i].addEventListener('mouseover', (e) => {
        let color = "black";
        e.target.style.background = color;
    });
};


