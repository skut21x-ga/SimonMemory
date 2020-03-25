let activatedDiv = document.querySelector(".inactive");
let topColor = (activatedDiv.style.borderTopColor = "red");
let rightColor = (activatedDiv.style.borderRightColor = "blue");
let bottomColor = (activatedDiv.style.borderBottomColor = "gold");
let leftColor = (activatedDiv.style.borderLeftColor = "green");
let msg = "";
let restartButton = document.querySelector(".restart");
let overlay = document.querySelector("#overlay");
let gridbox = document.querySelectorAll(".gridbox");
let hardMode = document.querySelector(".hardMode");
let computerValues = [];
let playerValues = [];

//msg = new SpeechSynthesisUtterance("Welcome to Simon.");
//window.speechSynthesis.speak(msg);
//Best Voices: Daniel, Karen, Tessa (british)
//https://codepen.io/matt-west/full/wGzuJ

function unclick() {
  topColor = activatedDiv.style.borderTopColor = "red";
  rightColor = activatedDiv.style.borderRightColor = "blue";
  bottomColor = activatedDiv.style.borderBottomColor = "gold";
  leftColor = activatedDiv.style.borderLeftColor = "green";
}

// Reset to Starter Colors
function deactivateAll() {
  topColor = activatedDiv.style.borderTopColor = "red";
  rightColor = activatedDiv.style.borderRightColor = "blue";
  bottomColor = activatedDiv.style.borderBottomColor = "gold";
  leftColor = activatedDiv.style.borderLeftColor = "green";
  msg = new SpeechSynthesisUtterance("game reset");
  //Best Voices: Daniel, Karen, Tessa (british)
  //https://codepen.io/matt-west/full/wGzuJ
  window.speechSynthesis.speak(msg);
}

// Individual Lightup Functions
function displayTop() {
  unclick();
  topColor = activatedDiv.style.borderTopColor = "hotpink";
  msg = new SpeechSynthesisUtterance("red");
  window.speechSynthesis.speak(msg);
  setInterval(unclick, 600);
}
function displayRight() {
  unclick();
  rightColor = activatedDiv.style.borderRightColor = "lightblue";
  msg = new SpeechSynthesisUtterance("blue");
  window.speechSynthesis.speak(msg);
  setInterval(unclick, 600);
}
function displayBottom() {
  unclick();
  bottomColor = activatedDiv.style.borderBottomColor = "yellow";
  msg = new SpeechSynthesisUtterance("yellow");
  window.speechSynthesis.speak(msg);
  setInterval(unclick, 600);
}
function displayLeft() {
  unclick();
  leftColor = activatedDiv.style.borderLeftColor = "lightgreen";
  msg = new SpeechSynthesisUtterance("green");
  window.speechSynthesis.speak(msg);
  setInterval(unclick, 600);
}

function hardModeActivate() {
  msg = new SpeechSynthesisUtterance("hard mode");
  window.speechSynthesis.speak(msg);
  setInterval(unclick, 600);
}

[
  gridbox[1],
  gridbox[2],
  gridbox[3],
  gridbox[9],
  gridbox[10],
  gridbox[11],
  gridbox[16],
  gridbox[17],
  gridbox[18],
  gridbox[19],
  gridbox[24],
  gridbox[25],
  gridbox[26]
].forEach(function(element) {
  element.addEventListener("click", displayTop);
});

[
  gridbox[4],
  gridbox[5],
  gridbox[12],
  gridbox[13],
  gridbox[14],
  gridbox[20],
  gridbox[21],
  gridbox[22],
  gridbox[23],
  gridbox[29],
  gridbox[30],
  gridbox[31]
].forEach(function(element) {
  element.addEventListener("click", displayRight);
});

[
  gridbox[37],
  gridbox[38],
  gridbox[39],
  gridbox[44],
  gridbox[45],
  gridbox[46],
  gridbox[47],
  gridbox[52],
  gridbox[53],
  gridbox[54],
  gridbox[60],
  gridbox[61]
].forEach(function(element) {
  element.addEventListener("click", displayBottom);
});

[
  gridbox[32],
  gridbox[33],
  gridbox[34],
  gridbox[40],
  gridbox[41],
  gridbox[42],
  gridbox[43],
  gridbox[49],
  gridbox[50],
  gridbox[51],
  gridbox[58],
  gridbox[59]
].forEach(function(element) {
  element.addEventListener("click", displayLeft);
});

restartButton.addEventListener("click", deactivateAll);

[gridbox[56], hardMode].forEach(function(element) {
  element.addEventListener("click", hardModeActivate);
});

/* Could have used this code to itterate, but it wouldnt be as exact:
for (let i = 0; i < 4; i++) {
  [gridbox[i], gridbox[i + 8], gridbox[i + 16], gridbox[i + 24]].foreach(
    function(element) {
      element.addEventListener("click", displayTop);
    });}
*/
