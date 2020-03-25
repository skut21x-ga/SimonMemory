let activatedDiv = document.querySelectorAll(".border");
let activatedTop = document.querySelector("#topShape");
let activatedRight = document.querySelector("#rightShape");
let activatedBottom = document.querySelector("#bottomShape");
let activatedLeft = document.querySelector("#leftShape");
let activatedTopBorder = document.querySelector("#topBorder");
let activatedRightBorder = document.querySelector("#rightBorder");
let activatedBottomBorder = document.querySelector("#bottomBorder");
let activatedLeftBorder = document.querySelector("#leftBorder");

// Hide ALL Activated Buttons on Start (or Reset)
function resetbuttons() {
  for (i = 0; i < 4; i++) {
    activatedDiv[i].style.display = "none";
  }
}
resetbuttons();

// Functions for Activated buttons Lighting Up
function displayTop() {
  activatedTopBorder.style.display = "flex";
  console.log("Top Activated!");
}

function displayRight() {
  activatedRightBorder.style.display = "flex";
  console.log("Right Activated!");
}

function displayBottom() {
  activatedBottomBorder.style.display = "flex";
  console.log("Bottom Activated!");
}
function displayLeft() {
  activatedLeftBorder.style.display = "flex";
  console.log("Left Activated!");
}

//event listeners (click for testing purposes. change!
activatedTop.addEventListener("click", displayTop);
activatedRight.addEventListener("click", displayRight);
activatedBottom.addEventListener("click", displayBottom);
activatedLeft.addEventListener("click", displayLeft);
