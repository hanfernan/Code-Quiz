//DOM variables
var start = document.querySelector(".start");
var startButton = document.querySelector(".start-button");
var container = document.querySelector(".container");
var questionContainer = document.querySelector("#question");
var answers = document.querySelector(".answer");
var timerEl = document.querySelector(".timer");

//javascript variables
var secondsLeft = 75;
var currentIndex = 0;

//functions
//function calls
//event listeners
function countDownTimer() {
    var timerInverval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInverval);
            //gameOver function
        }
    });
}
var questionBank = [
    {
        question: "Commonly used data types do not include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. objects"],
        correctAnswer: "3. alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed within _______.",
        answers: ["1. Quotes", "2. Curly Brackets", "3. Parentheses", "4. Square Brackets"],
        correctAnswer: "3. Parentheses",
    },
    {
        question: "Arrays in JavaScript can be used to store ___.",
        answers: ["1. Numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "4. all of the above",
    },
    {
        question: "4. String values must be enclosed within ___ when being assigned to variables.",
        answers: ["	1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "4. parentheses",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"],
        correctAnswer: "4. console log",
    },
];

function startGame() {
    start.classList.add("hidden");

    questionContainer.classList.remove("hidden");
    questionContainer.innerHTML = "";
    var question = document.createElement("h1");
    question.textContent = questionBank[currentIndex].question;
    questionContainer.appendChild(question);
    answers.innerHTML = "";
    var answer = document.createElement("div");
    for (var i = 0; i < questionBank[currentIndex].answers.length; i++) {
        var answerOption = document.createElement("button");
        answerOption.textContent = questionBank[currentIndex].answers[i];
        answerOption.addEventListener("click", check);
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
        //WHY ISN'T THIS WORKING!!!!!
    } else {
        alert("incorrect");
        timer = timer - 10;
    }
    currentIndex++;
    startGame()
    // if {
    //   //tell computer when to stop

    // }
}

startButton.addEventListener("click", startGame)