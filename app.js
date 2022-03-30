// Create 16x16 grid of square divs

const mainContainer = document.getElementById("main-container");

createSquares();

function createSquares() {
  //create rows
  for (i = 0; i < 16; i++) {
    let row = document.createElement("div");
    //create columns
    for (j = 0; j < 16; j++) {
      let square = document.createElement("div");
      square.setAttribute("class", "square");
      row.appendChild(square);
      console.log(`created column ${j}`);
    }
    row.setAttribute("class", "row");
    mainContainer.appendChild(row);
    console.log(`created row ${i}`);
  }
}

// function createSquares() {
//   for (i = 0; i < 256; i++) {
//     let square = document.createElement("div");
//     square.style.height = "16px";
//     square.style.width = "16px";

//     square.style.border = "solid black 1px";
//     mainContainer.appendChild(square);
//   }
// }
