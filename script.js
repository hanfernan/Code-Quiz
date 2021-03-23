//define global variables
var start = document.querySelector(".start");
var startButton = document.querySelector(".start-button");
var trueAnswer = document.querySelector(".true");
var container = document.querySelector(".container");
var questionContainer = document.querySelector("#question");

var questionBank = [
  //define the questionBank variable by creating an array of objects
  {
    question: "What is my name?",
    answers: [
      { a: "Jude", correct: true },
      { b: "bob", correct: false },
      { c: "Allie", correct: false },
    ],
  },
  {
    question: "Who is our instructor?",
    answers: [
      { a: "Rebecca", correct: false },
      { b: "Jonathan", correct: true },
      { c: "Leo", correct: false },
    ],
  },
  {},
  {},
];

startButton.addEventListener("click", startGame);

function startGame() {
  //hide instructions
  start.classList.add("hidden");

  questionContainer.classList.remove("hidden");

  //show questions div
  //start the timer
}
