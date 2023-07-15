---
layout: default
title: 漢字をテスト
has_children: true
permalink: /docs/toolkanji
---

# Tool test kanji

<link rel="stylesheet" href="{{ '/assets/css/kanjitool/style.css' | relative_url }}">

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
<script type="text/javascript" src="{{ '/assets/js/kanjitool/db.js' | relative_url }}"></script>
<script type="text/javascript" src="{{ '/assets/js/kanjitool/quizgame.js' | relative_url }}"></script>

{: .fs-6 .fw-300 }
