//define global variables
var start = document.querySelector(".start");
var firstQuest = document.querySelector(".first-question");
var secondQuest = document.querySelector(".second-question");
// var startButton = something;
var trueAnswer = document.querySelector(".true");
var container = document.querySelector(".container");

//note to Hannah of tomorrow: you have been trying to make one section show up at a time using data attributes and event bubbling. Keep going! YOU GOT THIS!
//this section is pulling from 04 Web APIs activity 20 on Data Attributes. I need to finish making it work for my purposes
container.addEventListener("click", function(event) {
    var element = event.target;
    
    if(element.matches(".question")) {
        var state = element.getAttribute("data-state");
        console.log(element.dataset)

        if (state === "hidden") {
            element.textContent = element.dataset.number;
            element.dataset.state = "visible";
        } else {
            element.textContent= "";
            element.setAttribute("data-state", "hidden")
        }

    }
});

//functions
//I will uses event bubbling to move through the questions
function goToOne(event) {
    event.stopPropagation();
    event.currentTarget

}

function goToTwo(event) {
    event.stopPropagation();

}
//event listeners

startButton.addEventListener("click", goToOne);
trueAnswer.addEventListener("click", goToTwo);



