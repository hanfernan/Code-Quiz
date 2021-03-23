# 04 Web APIs: Code Quiz

## Your Task

At some point in your journey to become a full-stack web developer, you’ll likely be asked to complete a coding assessment&mdash;perhaps as part of an interview process. A typical coding assessment includes both multiple-choice questions and interactive coding challenges. 

To help familiarize you with these tests and allow you to use the skills covered in this unit, this week’s homework invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. 

This week’s coursework will equip you with all the skills you need to succeed in this assignment.

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## Mock-Up

The following animation demonstrates the application functionality:

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](./Assets/04-web-apis-homework-demo.gif)

## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.





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
