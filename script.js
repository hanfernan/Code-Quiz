//define global variables


//store questions in an array
var questions = [
    {
        question: "What is the answer to this question?",
        choiceA : "answer 1",
        choiceB : "answer 2",
        choiceC : "answer 3",
        choiceD : "answer 4",
        correct : "B"
    },{
        question: "What is the answer to this other question?",
        choiceA : "answer 1",
        choiceB : "answer 2",
        choiceC : "answer 3",
        choiceD : "answer 4",
        correct : "B"
    }
];


//functions

 //write function to show question one at a time
function showQuestion(){

}
//event listeners
//write event listener that will 


//when the user clicks on 






//these are some notes for my thought process
//use .getElementById();
// I will need to append a <
//activity 5
//.querySelectorAll to select all of a certain element 
// or could use getElementById as well
//use .setAttribute to change items. takes two arguments. first is the name of the attribute you want to modify and second is what you want to change.
//activity 6
//set styling for multiple elements w/ for loop.
// for(var i = 0; i < varElementId.length; i++)) {
//     varElementId.setAttribute(
//         "style",
//         "color: blue; font-size: 30px; font-weight: bold"
//     );
// }

//activity 7
//.createElement
//remember the 3 step process!

//for buttons, use data attributes for right or wrong and event listeners for the click
//event bubbling to move through array for hiding questions. assign all questions to an array
//event.stopPropagation();
// use innerHTML to clear out an existing section 

//high scores stored in local storage
//event listeners when you click start 
//store an array of objects that include 3 pieces of data: store question as a string, store choices as an array of strings, and store the correct answer
//storing correct answer: add data attributes to each of the buttons. if false, stay. if true, move on
//innerHTML will allow you to wipe out the HTML content in between answers
//three step process to dynamically generate content
//score is equal to time left
//high score is an array of objects- initial and score
//data attribute is given to lis in HTML and .setAttribute is used in 