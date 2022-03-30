// Create 16x16 grid of square divs

const mainContainer = document.getElementById("main-container");
const btnClear = document.getElementById("btnClear");

const height = 720;
const width = 720;
let dimension = 16;

btnClear.addEventListener("click", () => {
  dimension = promptUser();
  removeAllChildNodes(mainContainer);
  createSquares();
});

createSquares();

function createSquares() {
  //create rows
  for (i = 0; i < dimension; i++) {
    let row = document.createElement("div");
    //create columns
    for (j = 0; j < dimension; j++) {
      let square = document.createElement("div");
      square.setAttribute("class", "square");
      square.style.height = height / dimension + "px";
      square.style.width = width / dimension + "px";
      row.appendChild(square);
    }
    row.setAttribute("class", "row");
    mainContainer.appendChild(row);
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function promptUser() {
  let newDimensions = parseInt(
    prompt(
      "How many squares per side would you like in your new grid? (Up to 100)",
      "64"
    )
  );
  while (newDimensions > 100) {
    newDimensions = parseInt(prompt("Dimensions cannot exceed 100", "64"));
  }
  return newDimensions;
}
