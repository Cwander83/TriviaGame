//starting with a array 
//=========================================================
//JavaScript Page for a shark base trivia game


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
//==============================================

var panel = $("#quiz-area");
var timer;
var countStartNumber = 60;

var game = {
    questions: questions,
    currentQuestions: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function () {
        this.counter--;
        $("#counter-number").text(this.counter);
        if (this.counter === 0) {
            console.log("Time Up!");
            this.timeUp();
        }
    },

    loadQuestion: function () {
        timer = setInterval(this.countdown.bind(this), 1000);
        panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
            panel.append("<button class='btn btn-info' id='button' data-name='" + questions[this.currentQuestion].answers[i] +
                "'>" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },

    nextQuestion: function () {},

    timeUp: function () {},

    results: function () {},

    clicked: function () {},

    answeredIncorrectly: function () {},

    answeredCorrectly: function () {},

    reset: function () {}
};