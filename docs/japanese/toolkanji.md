---
layout: default
title: Tool test kanji
has_children: true
permalink: /docs/toolkanji
---

# Tool test kanji

<link rel="stylesheet" href="./../../css/style.css" type="text/css" />

<h1>Kanji Quiz</h1>
    <div class="container">
        <div id="start"><button class="start-btn" onClick="beginQuiz()">Begin the Quiz!</button>
            <!-- <p>Test your knowledge of New Zealand birds!<br> Do you know which is which?<br> Each picture of a bird will be accompanied by four options. <br> Click on one to select it as your answer.</p> -->
            <p>Chaizo</p>
        </div>
        <div id="quiz" style="display: none">
            <h2 id="quizQuestion"></h2>
            <div class="img-div" id="quizImg"></div>
            <div id="choices">
                <button id="choiceA" class="onclickChoice"></button>
                <button id="choiceB" class="onclickChoice"></button>
                <button id="choiceC" class="onclickChoice"></button>
                <button id="choiceD" class="onclickChoice"></button>
            </div>
            <div id="choiceResponse" style="display: none"></div>
        </div>
        <div id="scoreBlock" style="display: none"></div>
        <div id="scoreMessage" style="display: none"></div>
        <div><button id="quizAgain" class="quizRestart" style="display: none" onClick="restartQuiz()">Try Again!</button></div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="./../../js/db.js"></script>
    <script type="text/javascript">
    //declare all variables
    var start = document.getElementById("start");
    var quiz = document.getElementById("quiz");
    var quizQuestion = document.getElementById("quizQuestion");
    var quizImg = document.getElementById("quizImg");
    var optionA = document.getElementById("choiceA");
    var optionB = document.getElementById("choiceB");
    var optionC = document.getElementById("choiceC");
    var optionD = document.getElementById("choiceD");
    var scoreBlock = document.getElementById("scoreBlock");
    var scoreMessage = document.getElementById("scoreMessage");
    var quizAgain = document.getElementById("quizAgain");
    var choices = document.getElementById("choices");
    var choiceResponse = document.getElementById("choiceResponse");
    var score = 0;

    var questionIndex = 0;

    // getQuestion function

    function getQuestion() {
        choiceResponse.style.display = "none";
        let q;
        do {
            q = questions[questionIndex];
        } while (q.imgSrc == '');

        quizQuestion.innerHTML = "<p>Question " + (questionIndex + 1) + ": " + q.question + "</p>";
        // quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
        quizImg.innerHTML = `<text class="${q.important ? q.important : ''}">${q.imgSrc}</text>`;

        const rs = Math.floor(Math.random() * 3);

        optionA.className = "";
        optionB.className = "";
        optionC.className = "";
        optionD.className = "";
        switch (rs) {
            case 0:
                optionA.innerHTML = q.choiceB;
                optionA.classList.add('choiceB');
                optionB.innerHTML = q.choiceC;
                optionB.classList.add('choiceC');
                optionC.innerHTML = q.choiceA;
                optionC.classList.add('choiceA');
                optionD.innerHTML = q.choiceD;
                optionD.classList.add('choiceD');
                break;
            case 1:
                optionA.innerHTML = q.choiceD;
                optionA.classList.add('choiceD');
                optionB.innerHTML = q.choiceA;
                optionB.classList.add('choiceA');
                optionC.innerHTML = q.choiceB;
                optionC.classList.add('choiceB');
                optionD.innerHTML = q.choiceC;
                optionD.classList.add('choiceC');
                break;
            case 2:
                optionA.innerHTML = q.choiceC;
                optionA.classList.add('choiceC');
                optionB.innerHTML = q.choiceD;
                optionB.classList.add('choiceD');
                optionC.innerHTML = q.choiceA;
                optionC.classList.add('choiceA');
                optionD.innerHTML = q.choiceB;
                optionD.classList.add('choiceB');
                break;
            case 3:
                optionA.innerHTML = q.choiceB;
                optionA.classList.add('choiceB');
                optionB.innerHTML = q.choiceC;
                optionB.classList.add('choiceC');
                optionC.innerHTML = q.choiceD;
                optionC.classList.add('choiceD');
                optionD.innerHTML = q.choiceA;
                optionD.classList.add('choiceA');
                break;
            default:
                console.log(">>>");
        }
        optionA.classList.add('onclickChoice');
        optionB.classList.add('onclickChoice');
        optionC.classList.add('onclickChoice');
        optionD.classList.add('onclickChoice');

        choices.style.display = "block";
    }


    // start quiz

    function beginQuiz() {
        start.style.display = "none";
        getQuestion();
        quiz.style.display = "block";
    }

    // show score function

    function showScore() {
        quiz.style.display = "none";
        scoreBlock.style.display = "block";
        scoreBlock.innerHTML = "<p> You scored " + score + " out of 10!</p>";

        if (score < 4) {
            scoreMessage.innerHTML = "<p>Not so good! Time for some revision.</p>";
        } else if (score < 8) {
            scoreMessage.innerHTML = "<p>Pretty good! But still room for improvement.</p>"
        } else {
            scoreMessage.innerHTML = "<p>Great work! You really know your birds!</p>"
        }
        scoreMessage.style.display = "block";
        quizAgain.style.display = "block";
    }

    //function to check if answer is correct
    $("button.onclickChoice").click(function() {
        check(this);
    });

    let timeerr = null;

    function check(that) {
        clearTimeout(timeerr);
        if (questionIndex < questions.length - 1) {
            if (that.innerText == questions[questionIndex].correctAnswer) {
                score++;
                questionIndex++;
                choices.style.display = "none";
                choiceResponse.innerHTML = "<p>Correct!</p>"
                choiceResponse.style.display = "block";
                timeerr = setTimeout(getQuestion, 1500);
            } else {
                questionIndex++;
                choices.style.display = "none";
                choiceResponse.innerHTML = "<p>Incorrect!</p>"
                choiceResponse.style.display = "block";
                timeerr = setTimeout(getQuestion, 1500);
            }
        } else {
            if (that.innerText == questions[questionIndex].correctAnswer) {
                score++;
                choices.style.display = "none";
                choiceResponse.innerHTML = "<p>Correct!</p>"
                choiceResponse.style.display = "block";
                timeerr = setTimeout(showScore, 1500);
            } else {
                choices.style.display = "none";
                choiceResponse.innerHTML = "<p>Inorrect!</p>"
                choiceResponse.style.display = "block";
                timeerr = setTimeout(showScore, 1500);
            }
        }
    }

    function restartQuiz() {
        start.style.display = "block";
        scoreBlock.style.display = "none";
        scoreMessage.style.display = "none";
        quizAgain.style.display = "none";
        score = 0;
        questionIndex = 0;
    }

    </script>

{: .fs-6 .fw-300 }
