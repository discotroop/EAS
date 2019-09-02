// This is minimum viable correct

// Can still do some styling and random color generation.

// 1. style layout
  // a. colors
  // b. fonts
  // c. add addtional text
  // d. shrink or remove squares borders

// 2. add random color generation
  // should be simple enough function to append to      // the cue

// 3. add fade out as tracer on pen

// 4. clean up and organize the code... it's all whacky and universally declared right now.
    //a. get it into functions
    //b. get it into objects

// side the next lesson in odin is on objects :P

let gridContainer = document.querySelector("#grid-container");

let gridBox = document.createElement("div");
gridBox.setAttribute("class", "gridBox");

let gridCount = document.querySelector("#gridCount");

function populateGrid(num) {
  let total = num * num;
  let i = 0;
  while (i < total) {
    gridContainer.appendChild(gridBox.cloneNode());
    i++;
  }
}

populateGrid(16);
// Why is the grid not scaling?
// need to make #grid-container dynamic.

// try it with a for loop ... never using forEach again!
// for (let i = 0; i < gridContainer.children.length; i++) {
//   gridContainer.children[i].addEventListener("mouseover", e => {
//     let color = "black";
//     e.target.style.background = color;
//   });
// }
function deleteGrid () {
  let children = gridContainer.lastElementChild;
  while (children) {
    gridContainer.remove(children);
    children = gridContainer.lastElementChild;
  }
}


// Need to clean up the code but it's working.

gridCount.addEventListener("click", e => {
  gridContainer.innerHTML = "";
  let gridCountNumber = window.prompt("How many rows would you like", "1");
  gridContainer.style.backgroundColor = "red";
  gridContainer.style.gridTemplateColumns = `repeat(${gridCountNumber}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridCountNumber}, 1fr)`;
  populateGrid(gridCountNumber);
  setHoverEvent();
});

function setHoverEvent() {
  for (let i = 0; i < gridContainer.children.length; i++) {
    gridContainer.children[i].addEventListener("mouseover", e => {
      let color = "black";
      e.target.style.background = color;
    });
  }
}



