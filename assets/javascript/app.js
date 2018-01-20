//starting with a array 
//=========================================================
//JavaScript Page for a shark base trivia game
var panel = $("#quiz-area");

var questions = [{
        //1 great white
        question: "Name this Shark?",
        answers: ["Black tip Reef Shark", "Great White Shark", "Nurse Shark", "Lemon Shark"],
        correctAnswer: "Great White Shark",
        video: "assets/images/greatwhite.mov",
    },
    //2 mako shark
    {
        question: "Name this Shark?",
        answers: ["Shortfin Mako Shark", "Angel Shark", "Gobin Shark", "Cookiecutter Shark"],
        correctAnswer: "Shortfin Mako Shark",
        video: "assets/images/makoshark.mov",
    },
    //3 nurse shark
    {
        question: "Name this Shark?",
        answers: ["Salmon Shark", "Great White Shark", "Bull Shark", "Nurse Shark"],
        correctAnswer: "Nurse Shark",
        video: "assets/images/nurseshark.mov"
    },
    //4 hockey sharks
    {
        question: "Name this Shark?",
        answers: ["San Jose Sharks", "Hammerhead Shark", "Lemon Shark", "Tiger Shark"],
        correctAnswer: "San Jose Sharks",
        image: "assets/images/hockeyshark.jpg",
    },
    //5 tiger shark
    {
        question: "Name this Shark?",
        answers: ["Tiger Shark", "Salmon Shark", "Black Tip Reef Shark", "Blue Shark"],
        correctAnswer: "Tiger Shark",
        video: "assets/images/tigershark.mov",
    },
    //6 bull shark
    {
        question: "Name this Shark?",
        answers: ["Whale Shark", "Six-Gilled Shark", "Bull Shark", "Basking Shark"],
        correctAnswer: "Bull Shark",
        video: "assets/images/bullshark.mov",
    },
    //7 hammerhead shark
    {
        question: "Name this Shark?",
        answers: ["Lemon Shark", "Hammerhead Shark", "Shortfin Mako Shark", "Gobin Shark"],
        correctAnswer: "Hammerhead Shark",
        video: "assets/images/hammerhead.mov",
    }
];




//vars i think i will use
//===============================================


var wrongCount = 0;
console.log("wrongcount: " + wrongCount);
var rightCount = 0;
console.log("rightcount: " + rightCount);

var questionArray = [questionOne.question, questionTwo.question, questionThree.question, questionFour.question, questionFive.question, questionSix.question, questionSeven.question];

console.log(questionArray[2]);


for (var i = 0; i < questionArray.length; i++) {
    questions = questionArray + i;
    console.log("array" + questions[i]);
}



//functions i think i will use
//===============================================

function displayVidImg() {
    $(".imgvid").attr("src", questionOne.video);
}
//
//function nextQuestion()
function startgame() {

    $("#questionid").append(questionOne.question);
    $("#a1").append(questionOne.a[0]);
    $("#a2").append(questionOne.b[0]);
    $("#a3").append(questionOne.c[0]);
    $("#a4").append(questionOne.d[0]);

    //$("#sharkvideo").load(questionOne.video);

    $(".answerslist").on("click", function () {

        if (questionOne.b[1] === true) {
            $("#a1, #a3, #a4").hide(1000);
            $("#a2").css("color", "blue");
            rightCount++;
            alert("yes");
            console.log(this);

        }
        /*else if (this === false)
            console.log("else" + this);
        alert("no wrong")
        wrongCount++;
        */
    });
}
$(document).ready(function () {
    setTimeout(startgame, 2000 * 1);
    setTimeout(displayVidImg, 3000 * 1);

});
//function reset(){}