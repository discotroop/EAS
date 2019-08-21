let gridContainer = document.querySelector("#grid-container")

let gridBox = document.createElement('div');
gridBox.setAttribute('class', 'gridBox');

function populateGrid () {
    let i = 0;
    while (i < 256) {
        gridContainer.appendChild(gridBox.cloneNode());
        i++
        console.log(i);
    };
};