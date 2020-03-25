let activatedDiv = document.querySelector(".inactive");
let topColor = (activatedDiv.style.borderTopColor = "red");
let rightColor = (activatedDiv.style.borderRightColor = "blue");
let bottomColor = (activatedDiv.style.borderBottomColor = "gold");
let leftColor = (activatedDiv.style.borderLeftColor = "green");
let msg = "";
let restartButton = document.querySelector(".restart");

// Testing ALL Button Activation
function activateAll() {
  topColor = activatedDiv.style.borderTopColor = "pink";
  rightColor = activatedDiv.style.borderRightColor = "cornflowerblue";
  bottomColor = activatedDiv.style.borderBottomColor = "lemonchiffon";
  leftColor = activatedDiv.style.borderLeftColor = "lawngreen";
  msg = new SpeechSynthesisUtterance("Welcome to Simon. Please pay attention.");
  //Best Voices: Daniel, Karen, Tessa (british)
  //https://codepen.io/matt-west/full/wGzuJ
  window.speechSynthesis.speak(msg);
}

// Reset to Starter Colors
function deactivateAll() {
  topColor = activatedDiv.style.borderTopColor = "red";
  rightColor = activatedDiv.style.borderRightColor = "blue";
  bottomColor = activatedDiv.style.borderBottomColor = "yellow";
  leftColor = activatedDiv.style.borderLeftColor = "green";
  msg = new SpeechSynthesisUtterance("Welcome to Simon. Please pay attention.");
  //Best Voices: Daniel, Karen, Tessa (british)
  //https://codepen.io/matt-west/full/wGzuJ
  window.speechSynthesis.speak(msg);
}

// Individual Lightup Functions
function displayTop() {
  topColor = activatedDiv.style.borderTopColor = "hotpink";
}

function displayRight() {
  rightColor = activatedDiv.style.borderRightColor = "cornflowerblue";
}

function displayBottom() {
  bottomColor = activatedDiv.style.borderBottomColor = "lemonchiffon";
}

function displayLeft() {
  leftColor = activatedDiv.style.borderLeftColor = "green";
}

restartButton.addEventListener("click", deactivateAll);

// Event Listeners for Clicks on SIMON BOARD:
// need to fix to be for border of DIV
// activatedTop.addEventListener("mouseover", displayTop);
// activatedRight.addEventListener("mouseover", displayRight);
// activatedBottom.addEventListener("mouseover", displayBottom);
// activatedLeft.addEventListener("mouseover", displayLeft);
