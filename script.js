//DOM variables
var start = document.querySelector(".start");
var startButton = document.querySelector(".start-button");
var container = document.querySelector(".container");
var questionContainer = document.querySelector("#question");
var answers = document.querySelector(".answer");
var timerEl = document.querySelector(".timer");
var endScreen = document.querySelector(".end-screen");
var finalScore = document.querySelector(".score");
var timerInterval

//javascript variables
var secondsLeft = 75;
var currentIndex = 0;
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

//Functions

//This function creates the countdown timer
function countDownTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();//game over function
        }
    }, 1000);
}

//This function starts the game when clicking the start button. This prompts the first question and starts the timer. 
function startGame() {
    start.classList.add("hidden");
    countDownTimer();
    displayQuestion();
}

//This function is designed to iterate through the various question components stored in the questionContainer array. 
function displayQuestion() {
    //display the question
    questionContainer.classList.remove("hidden");
    questionContainer.innerHTML = "";
    var question = document.createElement("h1");
    question.textContent = questionBank[currentIndex].question;
    questionContainer.appendChild(question);
    //display the corresponding answer
    answers.innerHTML = "";
    var answer = document.createElement("div");
    for (var i = 0; i < questionBank[currentIndex].answers.length; i++) {
        var answerOption = document.createElement("button");
        answerOption.textContent = questionBank[currentIndex].answers[i];
        answerOption.addEventListener("click", check);
        answer.appendChild(answerOption);
    }
    answers.appendChild(answer);

}

//this function opens the end screen 
function endQuiz() {
    //stop timer
    clearInterval(timerInterval);
    //show end screen 
    endScreen.classList.remove("hidden-end");
}

//this function checks the user's answer
function check(event) {

    if (event.target.textContent === questionBank[currentIndex].correctAnswer) {
        alert("correct");
        currentIndex++;
    } else {
        alert("incorrect");
        secondsLeft = secondsLeft - 10;
        currentIndex++;
    }


    //indicate when to stop
    if (secondsLeft === 0 || currentIndex === questionBank.length) {
        endQuiz();
    } else {
        displayQuestion();
    }
}

//event listeners
startButton.addEventListener("click", startGame)

//Remaining
//create stop screen
//add local storage for scores