let total = document.getElementById("total");

function adjust(factor) {
  switch (factor) {
    case (factor = "-"):
      total.textContent--;
      break;
    case (factor = "+"):
      total.textContent++;
      break;
    case (factor = "0"):
      reset();
      break;
  }
}

function reset() {
  total.textContent = 0;
}
