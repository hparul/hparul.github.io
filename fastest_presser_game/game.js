const inputBox = document.getElementById("game");
const startButton = document.getElementById("start");

const scoreTxtOfL = document.getElementById("score-L");

const scoreTxtOfS = document.getElementById("score-S");
const winner = document.getElementById("winner");

let countOfS = 0;
let countOfL = 0;

startButton.addEventListener("click", setTime);
function setTime() {
  const gameTime = inputBox.value;
  countOfS = 0;
  countOfL = 0;
  setTimeout(() => {
    console.log("time out");
    console.log("countOfS:" + countOfS + ", countOfL:" + countOfL);
    scoreTxtOfL.innerHTML = countOfL;
    scoreTxtOfS.innerHTML = countOfS;
    if (countOfL > countOfS) {
      console.log("L wins");
      var confettiSettings = { target: "canvasL", width: "200", height: "200" };
      var confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      winner.innerHTML = "Player L wins the game";
    } else if (countOfL < countOfS) {
      console.log("S wins");
      var confettiSettings = { target: "canvasS", width: "200", height: "200" };
      var confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      winner.innerHTML = "Player S wins the game";
    } else if (countOfL === countOfS) {
      console.log("game is a draw");
    }
  }, gameTime * 1000);
}

document.addEventListener("keydown", function (event) {
  if (event.code == "KeyL") {
    countOfL++;
    console.log("key L pressed");
  }
  if (event.code == "KeyS") {
    countOfS++;
    console.log("key S pressed");
  }
});
