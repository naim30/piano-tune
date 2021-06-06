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
  playPiano(clikedKey);
}

function clickUpHandler(event) {
  focusRemove(clikedKey);
}

function playPiano(key) {
  if (key !== null) {
    let audio = document.getElementById(key.getAttribute("data-note"));

    if (key.getAttribute("class") === "white-key") {
      key.style.backgroundColor = "#e7e7e7";
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
      key.style.backgroundColor = "white";
      key.style.boxShadow = "0px 6px #d2d2d2b4";
      key.style.top = "0px";
    } else {
      key.style.boxShadow = "0px 6px #d2d2d2c0";
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

let selectedColor = "white";

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
  if (color === "white") {
    for (let i = 0; i < whiteKey.length; i++) {
      whiteKey[i].style.backgroundImage = "none";
      whiteKey[i].style.boxShadow = "0px 6px #d2d2d2b4";
      if (i < 15) {
        blackKey[i].style.boxShadow = "0px 6px #d2d2d2c0";
      }
    }
  } else if (color === "blue") {
    for (let i = 0; i < whiteKey.length; i++) {
      whiteKey[i].style.backgroundImage =
        "linear-gradient(to top,rgba(11, 11, 138, 0.747),rgba(237, 146, 255, 0.658))";
      whiteKey[i].style.boxShadow = "0px 6px #b175ffb4";
      if (i < 15) {
        blackKey[i].style.boxShadow = "0px 6px #5d52f5c0";
      }
    }
  } else if (color === "red") {
    for (let i = 0; i < whiteKey.length; i++) {
      whiteKey[i].style.backgroundImage =
        "linear-gradient(to top,rgba(114, 12, 12, 0.849),rgba(247, 155, 155, 0.658))";
      whiteKey[i].style.boxShadow = "0px 6px #ec7272b4";
      if (i < 15) {
        blackKey[i].style.boxShadow = "0px 6px #a13e3ec0";
      }
    }
  } else if (color === "green") {
    for (let i = 0; i < whiteKey.length; i++) {
      whiteKey[i].style.backgroundImage =
        "linear-gradient(to top,rgb(5, 112, 5),rgba(129, 231, 125, 0.712))";
      whiteKey[i].style.boxShadow = "0px 6px rgba(93, 224, 93, 0.815)";
      if (i < 15) {
        blackKey[i].style.boxShadow = "0px 6px #0381038c";
      }
    }
  } else {
    for (let i = 0; i < whiteKey.length; i++) {
      whiteKey[i].style.backgroundImage =
        "linear-gradient(to top, yellow, rgba(231, 245, 43, 0.712))";
      whiteKey[i].style.boxShadow = "0px 6px rgba(224, 222, 93, 0.815)";
      if (i < 15) {
        blackKey[i].style.boxShadow = "0px 6px #bdc00a8c";
      }
    }
  }
}

document.addEventListener("click", colorChangeHandler);
