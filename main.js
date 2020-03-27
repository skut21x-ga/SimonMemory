//svg simon board variables
let topColor = document.querySelector(".red");
let topActiveColor = document.querySelector(".active-red");
let rightColor = document.querySelector(".blue");
let rightActiveColor = document.querySelector(".active-blue");
let bottomColor = document.querySelector(".yellow");
let bottomActiveColor = document.querySelector(".active-yellow");
let leftColor = document.querySelector(".green");
let leftActiveColor = document.querySelector(".active-green");
let muted = 0;
let overlay = document.querySelector(".overlay");
// mode variables
let hardMode = document.querySelector(".hardMode");
let hardModeStatus = false;
let easyMode = document.querySelector(".easyMode");
//scoring variables
let computerValues = [];
let playerValues = [];
let score = "";
let scoreboard = document.querySelector(".scoreboard");
let randomNumber = null;
let round = 0;
let startButton = document.querySelector(".startCircle");
let gameinProgress = false;
//high score variables//
let easyHighScoreField = document.querySelector(".easyHighScoreValue");
let easyHighScoreValue = "";
let hardHighScoreField = document.querySelector(".hardHighScoreValue");
let hardHighScoreValue = "";
localStorage.setItem("hardHighScoreValue", 5);
localStorage.setItem("easyHighScoreValue", 7);
easyHighScoreField.textContent = localStorage.easyHighScoreValue;
hardHighScoreField.textContent = localStorage.hardHighScoreValue;

//Best Voices: Daniel, Karen, Tessa (british)
//https://codepen.io/matt-west/full/wGzuJ
let msg = new SpeechSynthesisUtterance("Welcome");
window.speechSynthesis.speak(msg);
unclick();

// Reset Board Colors
function unclick() {
  topActiveColor.style.display = "none";
  rightActiveColor.style.display = "none";
  bottomActiveColor.style.display = "none";
  leftActiveColor.style.display = "none";
  topColor.style.display = "block";
  rightColor.style.display = "block";
  bottomColor.style.display = "block";
  leftColor.style.display = "block";
}

// Easy Mode Start
function easyModeActivate() {
  startButton.textContent = "START";
  unclick();
  let msg = new SpeechSynthesisUtterance("Easy Mode");
  window.speechSynthesis.speak(msg);
  overlay.setAttribute("id", "nonAnimatedDiv");
  scoreboard.style.display = "block";
  startButton.style.display = "none";
  hardModeStatus = false;
  score = 0;
  scoreboard.textContent = "0" + score;
  gameinProgress = true;
  computerValues = [0];
  playerValues = [];
  computerTurn();
}

// Individual Lightup Functions (by User)
function displayTop() {
  unclick();
  if (gameinProgress == true) {
    topActiveColor.style.display = "block";
    topColor.style.display = "none";
    msg = new SpeechSynthesisUtterance("red");
    setInterval(unclick, 2000);
    if (muted == 0) {
      window.speechSynthesis.speak(msg);
    }
    playerValues.push("red");
    roundCheck();
  }
}
function displayRight() {
  unclick();
  if (gameinProgress == true) {
    rightActiveColor.style.display = "block";
    rightColor.style.display = "none";
    msg = new SpeechSynthesisUtterance("blue");
    setInterval(unclick, 2000);
    if (muted == 0) {
      window.speechSynthesis.speak(msg);
    }
    playerValues.push("blue");
    roundCheck();
  }
}
function displayBottom() {
  unclick();
  if (gameinProgress == true) {
    bottomActiveColor.style.display = "block";
    bottomColor.style.display = "none";
    msg = new SpeechSynthesisUtterance("yellow");
    setInterval(unclick, 2000);
    if (muted == 0) {
      window.speechSynthesis.speak(msg);
    }
    playerValues.push("yellow");
    roundCheck();
  }
}

function displayLeft() {
  unclick();
  if (gameinProgress == true) {
    leftActiveColor.style.display = "block";
    leftColor.style.display = "none";
    msg = new SpeechSynthesisUtterance("green");
    setInterval(unclick, 1000);
    if (muted == 0) {
      window.speechSynthesis.speak(msg);
    }
    playerValues.push("green");
    roundCheck();
  }
}

function hardModeActivate() {
  score = 0;
  let msg = new SpeechSynthesisUtterance("Hard Mode");
  window.speechSynthesis.speak(msg);
  overlay.setAttribute("id", "animatedDiv");
  scoreboard.textContent = "0" + score;
  scoreboard.style.display = "block";
  startButton.style.display = "none";
  hardModeStatus = true;
  gameinProgress = true;
  computerValues = [0];
  playerValues = [];
  computerTurn();
}

topColor.addEventListener("click", displayTop);

rightColor.addEventListener("click", displayRight);

bottomColor.addEventListener("click", displayBottom);

leftColor.addEventListener("click", displayLeft);

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

function calculate(i) {
  randomNumber = Math.floor(Math.random(100) * 4);
  if (randomNumber == 0) {
    computerValues[i] = "red";
  } else if (randomNumber == 1) {
    computerValues[i] = "blue";
  } else if (randomNumber == 2) {
    computerValues[i] = "yellow";
  } else if (randomNumber == 3) {
    computerValues[i] = "green";
  }
}

//function for computer to set and say it's one color @ start
function computerTurn() {
  calculate(score);
  for (let i = 0; i <= score; i++) {
    if (computerValues[i] == "red") {
      computerTop();
    } else if (computerValues[i] == "blue") {
      computerRight();
    } else if (computerValues[i] == "yellow") {
      computerBottom();
    } else if (computerValues[i] == "green") {
      computerLeft();
    }
  }
}

// functions for computer to display its colors

function computerTop() {
  topActiveColor.style.display = "block";
  topColor.style.display = "none";
  msg = new SpeechSynthesisUtterance("red");
  setInterval(unclick, 3000);
  if (muted == 0) {
    window.speechSynthesis.speak(msg);
  }
}
function computerRight() {
  rightActiveColor.style.display = "block";
  rightColor.style.display = "none";
  msg = new SpeechSynthesisUtterance("blue");
  if (muted == 0) {
    window.speechSynthesis.speak(msg);
  }
  setInterval(unclick, 3000);
}
function computerBottom() {
  bottomActiveColor.style.display = "block";
  bottomColor.style.display = "none";
  msg = new SpeechSynthesisUtterance("yellow");
  if (muted == 0) {
    window.speechSynthesis.speak(msg);
  }
  setInterval(unclick, 3000);
}
function computerLeft() {
  leftActiveColor.style.display = "block";
  leftColor.style.display = "none";
  msg = new SpeechSynthesisUtterance("green");
  setInterval(unclick, 3000);
  if (muted == 0) {
    window.speechSynthesis.speak(msg);
  }
}

function startGame() {
  startButton.style.display = "none";
  msg = new SpeechSynthesisUtterance("Let's Begin with ");
  setInterval(unclick, 200);
  scoreboard.style.display = "block";
  if (muted == 0) {
    window.speechSynthesis.speak(msg);
  }
  gameinProgress = true;
  computerValues = [0];
  playerValues = [];
  score = 0;
  computerTurn();
}

//start game button listener
startButton.addEventListener("click", startGame);

//scoreboard functions
function increaseScore(x) {
  x += 1;
  if (x < 10) {
    scoreboard.textContent = "0" + x;
  } else if (x < 20) {
    scoreboard.textContent = x;
    scoreboard.style.marginLeft = "0";
  } else if (x < 100) {
    scoreboard.textContent = x;
    scoreboard.style.marginLeft = "0";
  } else if (x >= 100) {
    scoreboard.textContent = x;
    scoreboard.style.marginLeft = "-10";
  }
  return x;
}

// next round win or lose logic
function roundCheck(x) {
  if (playerValues.length == computerValues.length) {
    if (JSON.stringify(playerValues) == JSON.stringify(computerValues)) {
      console.log("Correct");
      msg = new SpeechSynthesisUtterance("Correct.....");
      window.speechSynthesis.speak(msg);
      score = increaseScore(score);
      checkHighScore();
      playerValues = [];
      setInterval(computerTurn(), 2000);
    } else {
      console.log("FAIL");
      checkHighScore();
      score = 0;
      scoreboard.style.display = "none";
      startButton.style.display = "block";
      scoreboard.textContent = "0" + score;
      msg = new SpeechSynthesisUtterance("You have failed");
      window.speechSynthesis.speak(msg);
      if (hardModeStatus == false && score == easyHighScoreValue) {
        msg = new SpeechSynthesisUtterance("New High Score");
        window.speechSynthesis.speak(msg);
      }
      if (hardModeStatus == true && score == easyHighScoreValue) {
        msg = new SpeechSynthesisUtterance("New Hard Mode High Score");
        window.speechSynthesis.speak(msg);
      }
      gameinProgress = false;
      playerValues = [];
    }
  }
}
function checkHighScore() {
  if (hardModeStatus == false && score > localStorage.easyHighScoreValue) {
    localStorage.setItem("easyHighScoreValue", score);
    easyHighScoreField.textContent = localStorage.easyHighScoreValue;
  }
  if (hardModeStatus == true && score > localStorage.hardHighScoreValue) {
    localStorage.setItem("hardHighScoreValue", score);
    hardHighScoreField.textContent = localStorage.hardHighScoreValue;
  }
}
