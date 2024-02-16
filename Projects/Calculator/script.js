let numInput = undefined;
let choice = undefined;
let screen = document.getElementById("result-text");

function input(button) {
  numInput = button.textContent;
  screen.textContent += numInput;
}

function arithmetic(operator) {
  choice = operator.textContent;
  if (choice == "x") choice = "*";
  screen.textContent += ` ${choice} `;
}

function erase() {
  screen.textContent = undefined;
}

function process(choice1, choice2) {
  let sum = undefined;
  switch (choice) {
    case (choice = "+"):
      sum = choice1 + choice2;
      break;
    case (choice = "-"):
      sum = choice1 - choice2;
      break;
    case (choice = "/"):
      sum = choice1 / choice2;
      break;
    case (choice = "*"):
      sum = choice1 * choice2;
      break;
  }
  return sum;
}

function equals() {
  let array1 = screen.textContent.split(`${choice}`);
  let sum = process(Number(array1[0]), Number(array1[1]));
  screen.textContent = sum;
}
