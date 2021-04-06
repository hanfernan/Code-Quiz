var scoreBoard = document.querySelector(".score-board");

function getStorage() {
    var scoreArray = JSON.parse(localStorage.getItem("scoreArray"));
    console.log(scoreArray);
    var scoreList = document.createElement("ol");
    for (i = 0; i < scoreArray.length; i++) {
        var objectKeys = Object.keys(scoreArray[i])[0];
        console.log(objectKeys)
    };
    scoreBoard.appendChild(scoreList);
}

getStorage();