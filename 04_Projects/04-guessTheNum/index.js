let count = 10;
const num = Math.floor(Math.random() * 100 + 1);
let prevGuess = "";

const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let numVal = document.querySelector("#guessField").value;

  if (count > 0) {

    if (numVal <= 100 && numVal > 0 && numVal != num) {
      count--;
      document.querySelector(".lastResult").innerHTML = count;
      prevGuess = prevGuess + " " + numVal;
      document.querySelector(".guesses").textContent = prevGuess;
    } else if (numVal == num){
        document.querySelector(".info").textContent = "Hurray! You Won."
    } 
    else {
      document.querySelector(".info").textContent =
        "Enter a Number between 1 to 100";
    }

  } else {
    document.querySelector(".info").textContent = "Better Luck Next Time";
  }

});
