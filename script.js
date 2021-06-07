let selectedColor = "white";
let colorObject = {
  white: [
    "rgba(255, 255, 255, 0.973)",
    "0px 6px rgba(210, 210, 210, 0.706)",
    "rgb(14, 13, 13)",
    "0px 6px rgba(210, 210, 210, 0.753)",
    "rgb(231, 231, 231)",
  ],
  blue: [
    "rgba(0, 0, 255, 0.438)",
    "0px 6px rgba(10, 10, 134, 0.199)",
    "rgb(0, 0, 54)",
    "0px 6px rgba(0, 0, 54, 0.24)",
    "rgba(15, 15, 189, 0.308)",
  ],
  green: [
    "rgba(0, 128, 0, 0.712)",
    "0px 6px rgba(6, 114, 6, 0.219)",
    "rgb(0, 17, 0)",
    "0px 6px rgba(0, 17, 0, 0.199)",
    "rgba(0, 128, 0, 0.568)",
  ],
  red: [
    "rgba(255, 0, 0, 0.623)",
    "0px 6px rgba(189, 10, 10, 0.192)",
    "rgb(44, 1, 1)",
    "0px 6px rgba(44, 1, 1, 0.205)",
    "rgba(201, 0, 0, 0.623)",
  ],
  yellow: [
    "rgba(255, 255, 0, 0.829)",
    "0px 6px rgba(202, 202, 5, 0.466)",
    "rgb(160, 124, 26)",
    "0px 6px rgba(160, 124, 26, 0.315)",
    "rgba(226, 226, 0, 0.829)",
  ],
};

function keyPianoHandler(event) {
  let key = document.querySelector(`span[data-key="${event.keyCode}"]`);
  playPiano(key);
}

function keyUpHandler(event) {
  let key = document.querySelector(`span[data-key="${event.keyCode}"]`);
  focusRemove(key);
}

let clikedKey = null;

function clickPianoHandler(event) {
  clikedKey = event.target.closest("span[data-key]");
  event.preventDefault();
  playPiano(clikedKey);
}

function clickUpHandler(event) {
  event.preventDefault();
  focusRemove(clikedKey);
}

function playPiano(key) {
  if (key !== null) {
    let audio = document.getElementById(key.getAttribute("data-note"));

    if (key.getAttribute("class") === "white-key") {
      key.style.backgroundColor = colorObject[selectedColor][4];
      key.style.boxShadow = "none";
      key.style.top = "3px";
    } else {
      key.style.boxShadow = "none";
      key.style.top = "3px";
    }

    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }
}

function focusRemove(key) {
  if (key !== null) {
    if (key.getAttribute("class") === "white-key") {
      key.style.backgroundColor = colorObject[selectedColor][0];
      key.style.boxShadow = colorObject[selectedColor][1];
      key.style.top = "0px";
    } else {
      key.style.boxShadow = colorObject[selectedColor][3];
      key.style.top = "0px";
    }
  }
}

document.addEventListener("keydown", keyPianoHandler);
document.addEventListener("keyup", keyUpHandler);

document.addEventListener("mousedown", clickPianoHandler);
document.addEventListener("mouseup", clickUpHandler);

document.addEventListener("touchstart", clickPianoHandler);
document.addEventListener("touchend", clickUpHandler);

function colorChangeHandler(event) {
  if (event.target.classList.contains("color-name")) {
    if (event.target.classList.contains("white")) {
      selectedColor = "white";
      changeColor(selectedColor);
    } else if (event.target.classList.contains("blue")) {
      selectedColor = "blue";
      changeColor(selectedColor);
    } else if (event.target.classList.contains("red")) {
      selectedColor = "red";
      changeColor(selectedColor);
    } else if (event.target.classList.contains("green")) {
      selectedColor = "green";
      changeColor(selectedColor);
    } else {
      selectedColor = "yellow";
      changeColor(selectedColor);
    }
  }
}

function changeColor(color) {
  let whiteKey = document.querySelectorAll(".white-key");
  let blackKey = document.querySelectorAll(".black-key");
  for (let i = 0; i < whiteKey.length; i++) {
    whiteKey[i].style.backgroundColor = colorObject[color][0];
    whiteKey[i].style.boxShadow = colorObject[color][1];
    if (i < 15) {
      blackKey[i].style.backgroundColor = colorObject[color][2];
      blackKey[i].style.boxShadow = colorObject[color][3];
    }
  }
}

document.addEventListener("click", colorChangeHandler);
document.addEventListener("touchend", colorChangeHandler);
