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
let hardModeStatus = false;
let muted = 0;

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
  activatedDiv.setAttribute("id", "nonAnimatedDiv");
  msg = new SpeechSynthesisUtterance("EASY MODE");
  //Best Voices: Daniel, Karen, Tessa (british)
  //https://codepen.io/matt-west/full/wGzuJ
  if (muted == 0) {
    window.speechSynthesis.speak(msg);
  }
  hardModeStatus = false;
}

// Individual Lightup Functions
function displayTop() {
  unclick();
  topColor = activatedDiv.style.borderTopColor = "hotpink";
  msg = new SpeechSynthesisUtterance("red");
  setInterval(unclick, 600);
  if (muted == 0) {
    window.speechSynthesis.speak(msg);
  }
}
function displayRight() {
  unclick();
  rightColor = activatedDiv.style.borderRightColor = "lightblue";
  msg = new SpeechSynthesisUtterance("blue");
  setInterval(unclick, 600);
  if (muted == 0) {
    window.speechSynthesis.speak(msg);
  }
}
function displayBottom() {
  unclick();
  bottomColor = activatedDiv.style.borderBottomColor = "yellow";
  msg = new SpeechSynthesisUtterance("yellow");
  setInterval(unclick, 600);
  if (muted == 0) {
    window.speechSynthesis.speak(msg);
  }
}
function displayLeft() {
  unclick();
  leftColor = activatedDiv.style.borderLeftColor = "lightgreen";
  msg = new SpeechSynthesisUtterance("green");
  setInterval(unclick, 600);
  if (muted == 0) {
    window.speechSynthesis.speak(msg);
  }
}

function hardModeActivate() {
  if (hardModeStatus == false) {
    activatedDiv.setAttribute("id", "animatedDiv");
    msg = new SpeechSynthesisUtterance("hard mode");
    hardModeStatus = true;
    setInterval(unclick, 600);
    if (muted == 0) {
      window.speechSynthesis.speak(msg);
    }
  }
}

[
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

//easy mode button
restartButton.addEventListener("click", deactivateAll);

//hard mode button
[hardMode].forEach(function(element) {
  element.addEventListener("click", hardModeActivate);
});

function mute() {
  muteButton.style.display = "none";
  unmuteButton.style.display = "block";
  console.log("muted");
  msg = new SpeechSynthesisUtterance("sound off");
  window.speechSynthesis.speak(msg);
  muted = 1;
}

function unmute() {
  muteButton.style.display = "block";
  unmuteButton.style.display = "none";
  console.log("sound on");
  msg = new SpeechSynthesisUtterance("sound on");
  window.speechSynthesis.speak(msg);
  muted = 0;
}

let muteButton = document.querySelector(".muteButton");
let unmuteButton = document.querySelector(".unmuteButton");

//mute button
muteButton.addEventListener("click", mute);
unmuteButton.addEventListener("click", unmute);
