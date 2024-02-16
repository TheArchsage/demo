const questions = document.getElementById("questions");
const page2 = document.getElementById("score-div");
let score = null;
function hide() {
  questions.classList.add("hide");
}
function reset() {
  page2.classList.add("hide");
  questions.classList.remove("hide");
  score = null;
}

function selected() {
  const checkBox = document.getElementsByTagName("input");
  let tempVal = 0;
  for (let i = 0; i < checkBox.length; i++) {
    if (checkBox[i].checked == true) {
      tempVal++;
      score++;
    }
  }
  if (tempVal != 4) return alert("Please select an answer for each question");
  return;
}

function displayScore() {
  page2.classList.remove("hide");
  const span = document.getElementById("score");
  span.textContent = score;
}

function results() {
  selected();
  let correctTal = 0;
  let correctRes = document.getElementsByClassName("correct");
  for (let i = 0; i < correctRes.length; i++) {
    if (correctRes[i].checked == true) correctTal++;
  }
  hide();
  displayScore();
}
