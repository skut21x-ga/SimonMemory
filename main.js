let activatedDiv = document.querySelector(".inactive");
let topColor = (activatedDiv.style.borderTopColor = "red");
topColor.value = 0;
let rightColor = (activatedDiv.style.borderRightColor = "blue");
rightColor.value = 1;
let bottomColor = (activatedDiv.style.borderBottomColor = "gold");
bottomColor.value = 2;
let leftColor = (activatedDiv.style.borderLeftColor = "green");
leftColor.value = 3;
let msg = "";
let easyMode = document.querySelector(".easyMode");
let overlay = document.querySelector("#overlay");
let gridbox = document.querySelectorAll(".gridbox");
let hardMode = document.querySelector(".hardMode");
let computerValues = [0];
let playerValues = [];
let hardModeStatus = false;
let muted = 0;
let score = 0;
let scoreboard = document.querySelector(".scoreboard");
let randomNumber = null;
let round = 0;
let startButton = document.querySelector(".starter");
let gameinProgress = false;

//Best Voices: Daniel, Karen, Tessa (british)
//https://codepen.io/matt-west/full/wGzuJ
msg = new SpeechSynthesisUtterance("Welcome");
window.speechSynthesis.speak(msg);

// Reset Board Colors
function unclick() {
  topColor = activatedDiv.style.borderTopColor = "red";
  rightColor = activatedDiv.style.borderRightColor = "blue";
  bottomColor = activatedDiv.style.borderBottomColor = "gold";
  leftColor = activatedDiv.style.borderLeftColor = "green";
}

// Easy Mode Start
function easyModeActivate() {
  console.log("test");
  startButton.textContent = "START";
  topColor = activatedDiv.style.borderTopColor = "red";
  rightColor = activatedDiv.style.borderRightColor = "blue";
  bottomColor = activatedDiv.style.borderBottomColor = "gold";
  leftColor = activatedDiv.style.borderLeftColor = "green";
  activatedDiv.setAttribute("id", "nonAnimatedDiv");
  scoreboard.style.display = "block";
  startButton.style.display = "none";
  hardModeStatus = false;
  score = 0;
  scoreboard.textContent = "0" + score;
  gameinProgress = true;
  computerValues = [0];
  playerValues = [0];
  computerTurn(score);
}

// Individual Lightup Functions (by User)
function displayTop() {
  unclick();
  if (gameinProgress == true) {
    topColor = activatedDiv.style.borderTopColor = "hotpink";
    msg = new SpeechSynthesisUtterance("red");
    setInterval(unclick, 1000);
    if (muted == 0) {
      window.speechSynthesis.speak(msg);
    }
    playerValues[score] == "red";
    roundCheck(score);
  }
}
function displayRight() {
  unclick();
  if (gameinProgress == true) {
    rightColor = activatedDiv.style.borderRightColor = "lightblue";
    msg = new SpeechSynthesisUtterance("blue");
    setInterval(unclick, 1000);
    if (muted == 0) {
      window.speechSynthesis.speak(msg);
    }
    playerValues[score] = "blue";
    roundCheck(score);
  }
}
function displayBottom() {
  unclick();
  if (gameinProgress == true) {
    bottomColor = activatedDiv.style.borderBottomColor = "yellow";
    msg = new SpeechSynthesisUtterance("yellow");
    setInterval(unclick, 1000);
    if (muted == 0) {
      window.speechSynthesis.speak(msg);
    }
    playerValues[score] = "yellow";
    roundCheck(score);
  }
}

function displayLeft() {
  unclick();
  if (gameinProgress == true) {
    leftColor = activatedDiv.style.borderLeftColor = "lightgreen";
    msg = new SpeechSynthesisUtterance("green");
    setInterval(unclick, 1000);
    if (muted == 0) {
      window.speechSynthesis.speak(msg);
    }
    playerValues[score] == "green";
    roundCheck(score);
  }
}

function hardModeActivate() {
  score = 0;
  activatedDiv.setAttribute("id", "animatedDiv");
  scoreboard.textContent = "0" + score;
  scoreboard.style.display = "block";
  startButton.style.display = "none";
  hardModeStatus = true;
  gameinProgress = true;
  computerValues = [0];
  playerValues = [0];
  computerTurn(score);
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

hardMode.addEventListener("click", hardModeActivate);
easyMode.addEventListener("click", easyModeActivate);

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

// random color function

function calculate(x) {
  randomNumber = Math.floor(Math.random(100) * 4);
  if (randomNumber == 0) {
    computerValues[x] = "red";
  } else if (randomNumber == 1) {
    computerValues[x] = "blue";
  } else if (randomNumber == 2) {
    computerValues[x] = "yellow";
  } else if (randomNumber == 3) {
    computerValues[x] = "green";
  }
}

//function for computer to set and say it's one color @ start
function computerTurn(score) {
  if (computerValues[score] == 0) {
    calculate(score);
  }
  if (computerValues[score] == "red") {
    computerTop();
  } else if (computerValues[score] == "blue") {
    computerRight();
  } else if (computerValues[score] == "yellow") {
    computerBottom();
  } else if (computerValues[score] == "green") {
    computerLeft();
  }
}

// functions for computer to display its colors

function computerTop() {
  unclick();
  topColor = activatedDiv.style.borderTopColor = "hotpink";
  msg = new SpeechSynthesisUtterance("red");
  setInterval(unclick, 1500);
  if (muted == 0) {
    window.speechSynthesis.speak(msg);
  }
}
function computerRight() {
  unclick();
  rightColor = activatedDiv.style.borderRightColor = "lightblue";
  msg = new SpeechSynthesisUtterance("blue");
  setInterval(unclick, 1500);
  if (muted == 0) {
    window.speechSynthesis.speak(msg);
  }
}
function computerBottom() {
  unclick();
  bottomColor = activatedDiv.style.borderBottomColor = "yellow";
  msg = new SpeechSynthesisUtterance("yellow");
  setInterval(unclick, 1500);
  if (muted == 0) {
    window.speechSynthesis.speak(msg);
  }
}
function computerLeft() {
  unclick();
  leftColor = activatedDiv.style.borderLeftColor = "lightgreen";
  msg = new SpeechSynthesisUtterance("green");
  setInterval(unclick, 1500);
  if (muted == 0) {
    window.speechSynthesis.speak(msg);
  }
}

function startGame() {
  startButton.style.display = "none";

  msg = new SpeechSynthesisUtterance("  .  .");
  setInterval(unclick, 600);
  scoreboard.style.display = "block";
  if (muted == 0) {
    window.speechSynthesis.speak(msg);
  }
  gameinProgress = true;
  computerValues = [0];
  playerValues = [0];
  score = 0;
  computerTurn(score);
}

//start game button listener
[gridbox[27], gridbox[28], gridbox[35], gridbox[36], startButton].forEach(
  function(element) {
    element.addEventListener("click", startGame);
  }
);

//scoreboard functions
function increaseScore(score) {
  score += 1;
  if (score < 10) {
    scoreboard.textContent = "0" + score;
    scoreboard.style.marginLeft = "235px";
  } else if (score < 20) {
    scoreboard.textContent = score;
    scoreboard.style.marginLeft = "-36px";
  } else if (score < 100) {
    scoreboard.textContent = score;
    scoreboard.style.marginLeft = "-48px";
  } else if (score >= 100) {
    scoreboard.textContent = score;
    scoreboard.style.marginLeft = "-60px";
  }
}

// next round win or lose logic
function roundCheck(score) {
  if (playerValues.length == computerValues.length) {
    if (JSON.stringify(playerValues) == JSON.stringify(computerValues)) {
      console.log("Correct. Next Round");
      computerTurn(score);
    } else {
      console.log("FAIL");
      score = 0;
      scoreboard.style.display = "none";
      startButton.style.display = "block";
      scoreboard.textContent = "0" + score;
      msg = new SpeechSynthesisUtterance("You have failed");
      window.speechSynthesis.speak(msg);
      gameinProgress = false;
    }
  }
}

//win game logic? high score?
