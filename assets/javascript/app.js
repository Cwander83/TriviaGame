$(document).ready(function () {

    //starting with a array 
    //=========================================================
    var questionOne = {
        //1 great white

        question: "Name this Shark?",

        a: ["A: black tip reef shark", false],
        b: ["B: great white shark", true],
        c: ["C: nurse shark", false],
        d: ["D: lemon shark", false],

        video: "assets/images/greatwhite.mov",
    };
    //2 mako shark
    var questionTwo = {
        question: "Name this Shark?",

        a: ["A: shortfin mako shark", true],
        b: ["B: angel shark", false],
        c: ["C: gobin shark", false],
        d: ["D: cookiecutter shark", false],

        video: "assets/images/makoshark.mov",
    };
    //3 nurse shark
    var questionThree = {
        question: "Name this Shark?",

        a: ["A: salmon shark", false],
        b: ["B: great white shark", false],
        c: ["C: bull shark", false],
        d: ["D: nurse shark", true],

        video: "assets/images/nurseshark.mov"
    };
    //4 hockey sharks
    var questionFour = {
        question: "Name this Shark?",

        a: ["A: san jose sharks", true],
        b: ["B: hammerhead shark", false],
        c: ["C: lemon shark", false],
        d: ["D: tiger shark", false],

        image: "assets/images/hockeyshark.jpg",
    };
    //5 tiger shark
    var questionFive = {
        question: "Name this Shark?",

        a: ["A: tiger shark", true],
        b: ["B: salmon shark", false],
        c: ["C: black tip reef shark", false],
        d: ["D: blue shark", false],

        video: "assets/images/tigershark.mov",
    };
    //6 bull shark
    var questionSix = {
        question: "Name this Shark?",

        a: ["A: whale shark", false],
        b: ["B: six-gilled shark", false],
        c: ["C: bull shark", true],
        d: ["D: basking shark", false],

        video: "assets/images/bullshark.mov",
    };
    //7 hammerhead shark
    var questionSeven = {
        question: "Name this Shark?",

        a: ["A: lemon shark", false],
        b: ["B: hammerhead shark", true],
        c: ["C: shortfin mako shark", false],
        d: ["D: gobin shark", false],

        video: "assets/images/hammerhead.mov",
    };

    startgame();

    console.log("first" + questionSix.b[0]);



    //global vars i think i will use
    //===============================================


    var wrongCount = 0;
    console.log("wrongcount: " + wrongCount);
    var rightCount = 0;
    console.log("rightcount: " + rightCount);

    var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];

    console.log("array" + questionArray[3]);

    //functions i think i will use
    //===============================================

    function startgame() {

        $("#questionid").append(questionOne.question);
        $("#a1").append(questionOne.a[0]);
        $("#a2").append(questionOne.b[0]);
        $("#a3").append(questionOne.c[0]);
        $("#a4").append(questionOne.d[0]);
        //$("#sharkvideo").load(questionOne.video);

        $(".answerslist").on("click", function () {

            if (questionOne.b[1] == true) {
                $("#a1, #a3, #a4").hide(1000);
                $("#a2").css("color", "blue");
                rightCount + 1;
                alert("yes");
                console.log(rightCount + 1);

            } else if
                (this == false)
                console.log("else");
            alert("no wrong")
            wrongCount++;





        })
    }

});
//function reset(){}