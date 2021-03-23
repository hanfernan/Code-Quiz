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
    correctAnswer: "3. alerts",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within _______.",
    answers: [
      "1. Quotes",
      "2. Curly Brackets",
      "3. Parentheses",
      "4. Square Brackets",
    ],
    correctAnswer: "3. Parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store ___.",
    answers: [
      "1. Numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    correctAnswer: "4. all of the above",
  },
  {
    question:
      "4. String values must be enclosed within ___ when being assigned to variables.",
    answers: ["	1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    correctAnswer: "4. parentheses",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console log",
    ],
    correctAnswer: "4. console log",
  },
];

function startGame() {
  //hide instructions
  start.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  //create the h1 element to hold the question
  var question = document.createElement("h1");
  //put the question within that element
  question.textContent = questionBank[currentIndex].question;
  //append the question to questionContainer
  questionContainer.appendChild(question);
  //create a div element to hold
  var answer = document.createElement("div");
  //create a for loop that will populate a button for each answerOption
  for (var i = 0; i < questionBank[currentIndex].answers.length; i++) {
    //define a variable to iterate through the answer options
    var answerOption = document.createElement("button");
    //assign text content from the questionBank to the answer buttons
    answerOption.textContent = questionBank[currentIndex].answers[i];
    //add an event listener to run check function on click
    answerOption.addEventListener("click", check);
    //append the answer options to the .answer div
    answer.appendChild(answerOption);
  }
  answers.appendChild(answer);

  setInterval(function () {
    timer--;
    timerEl.innerHTML = timer;
  }, 1000);
}

function check(event) {
  //show next question
  //check if answer is right or wrong
  if (event.target.textContent === questionBank[0].correctAnswer) {
    alert("correct");
    currentIndex++;
    //WHY ISN'T THIS WORKING!!!!!
  } else {
    alert("incorrect");
    timer = timer - 10;
  }
  // if {
  //   //tell computer when to stop

  // }
}

startButton.addEventListener("click", startGame);
