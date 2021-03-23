//define global variables
var start = document.querySelector(".start");
var startButton = document.querySelector(".start-button");
var container = document.querySelector(".container");
var questionContainer = document.querySelector("#question");
var answers = document.querySelector(".answer");
var currentIndex = 0;

var questionBank = [
  {
    question: "Commonly used data types do not include:",
    answers: ["1. strings", "2. booleans", "3. alerts", "4. objects"],
    correctAnswer: "alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within _______.",
    answers: ["1. Quotes", "2. Curly Brackets", "3. Parentheses", "4. Square Brackets"],
    correctAnswer: "Parentheses",
  },
  {},
  {},
];

startButton.addEventListener("click", startGame);

function startGame() {
  //hide instructions
  start.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  var question = document.createElement("h1");
  question.textContent = questionBank[currentIndex].question;
  questionContainer.appendChild(question);
  //appending question to questionContainer
  var answer = document.createElement("ol");
  for (var i = 0; i < questionBank[currentIndex].answers.length; i++) {
    var answerOption = document.createElement("li");
    answerOption.textContent = questionBank[currentIndex].answers[i];
    answerOption.addEventListener("click", check);
    answer.appendChild(answerOption);
  }
  answers.appendChild(answer);
}

function check(event) {
  console.log(event.target.textContent);
  if{
    //tell computer when to stop
  }
  if {
    //check if answer is right or wrong
  }
}
