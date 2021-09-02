// Home page
var mainEl = document.querySelector("#main");
var timerEl = document.querySelector("#timer");
var timeLeft = 45;
var totalPoints = 0;
var end = false;

// Functions for use in questions
var timer = function() {
    var timeInterval = setInterval(() => {
        if (end === false) {
            timerEl.textContent = timeLeft;
            timeLeft --;
            return timeLeft;
        }
    }, 1000);
}


var start = function() {
    //Home Container
    var container = document.createElement("div");
        container.className = "home-container"
        mainEl.appendChild(container);

    //Start
    var homeHeader = document.createElement("h1");
        homeHeader.className = "home-title";
        homeHeader.textContent = "Coding Quiz Challenge";
        container.appendChild(homeHeader);

    //Start
    var homeParagraph = document.createElement("p");
        homeParagraph.className = "home-text-p";
        homeParagraph.textContent = "Try to answer the following code-related" +
            " questions within the time limit. Keep in mind that incorrect answers will" +
            " penalize your score/time by ten seconds!"
        container.appendChild(homeParagraph);

    //Start Button
    var startQuizBtn = document.createElement("button");
        startQuizBtn.className = "home-btn";
        startQuizBtn.textContent = "Start Quiz";
        container.appendChild(startQuizBtn);

    //Removes Elements
    startQuizBtn.addEventListener("click", event => {
        timer();
        startQuizBtn.remove();
        homeHeader.remove();
        homeParagraph.remove();
        questionOne();
});
}
start();

var highScores = function() {
    // High Score
    var highScoreContainer = document.createElement("div");
        highScoreContainer.className = "hs-container";
        mainEl.appendChild(highScoreContainer);

    // High Score
    var title = document.createElement("h1");
        title.className = "high-score-title";
        title.textContent = "High Scores";
        highScoreContainer.appendChild(title);

    //High Scores Display
    var initals = localStorage.getItem("initals");
    var score = localStorage.getItem("score");
    var leaderboardScore = document.createElement("p");
        leaderboardScore.className = "leaderboard-score";
        leaderboardScore.textContent = "1." + initals + " - " + score;
        highScoreContainer.appendChild(leaderboardScore);


    //Leader Board
    var leaderboard = document.createElement("div");
        leaderboard.className = "leaderboard";
        highScoreContainer.appendChild(leaderboard);
     //Back Button
    var goBack = document.createElement("button");
        goBack.className = "go-back-btn";
        goBack.textContent = "Go Back";
        goBack.addEventListener("click", event => {
            totalPoints = 0;
            end = false;
            timeLeft = 45;
            highScoreContainer.remove();
                start();
    })
    leaderboard.appendChild(goBack);
    //Clear High Score Button
    var clearHighScore = document.createElement("button");
        clearHighScore.className = "clear-highScore";
        clearHighScore.textContent = "Clear High Scores";
        clearHighScore.addEventListener("click", event => {
            leaderboardScore.remove();
    })
    leaderboard.appendChild(clearHighScore);
}

var enterScore = function() {
        // Done Container
        var doneContainer = document.createElement("div");
        doneContainer.className = "done-container";
        mainEl.appendChild(doneContainer);
        // All Done
    var done = document.createElement("h1");
    done.textContent = "All Done!";
    done.className = "done-title";
    doneContainer.appendChild(done);
        // Score
    var score = document.createElement("h4");
    score.textContent = "Your final score is " + totalPoints;
    score.className = "score";
    doneContainer.appendChild(score); 

        //Input Container
    var inputContainer = document.createElement("div");
    inputContainer.className = "input-container";
    doneContainer.appendChild(inputContainer);

        // Initials
    var label = document.createElement("label");
    label.textContent = "Enter Initials:";
    label.className = "label";
    label.setAttribute("for", "input");
    inputContainer.appendChild(label);
        // Initials
    var initalInput = document.createElement("Input");
    initalInput.className = "score-input";
    initalInput.setAttribute("id", "input")
    initalInput.setAttribute("name", "input");
    initalInput.setAttribute("type", "text");
    inputContainer.appendChild(initalInput);
        //Submit Button
    var submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.className = "submit-btn";
    submit.addEventListener("click", event => {
        //Initials
        var initals = document.getElementById("input").value;
        //Clear
        doneContainer.remove();
        //High Scores Page
        highScores();
    })
    inputContainer.appendChild(submit);
}


//QUESTION ONE---------------------------------------------------

var questionOne = function() {
    //Wrong Answer
    var removeWrong = function() {
    timeLeft = timeLeft - 10;
    questionContainer.remove();
    questionTwo();
}
    //Question Container
    var questionContainer = document.createElement("div");
        questionContainer.className = "question-container";
        mainEl.appendChild(questionContainer);

    //Question One - Question
    var question = document.createElement("h1");
        question.className = "question";
        question.textContent = "1.Commonly Used data types DO NOT Include:";
        questionContainer.appendChild(question);

    //Answer Container
    var answerContainer = document.createElement("div");
        answerContainer.className = "answer-container";
        questionContainer.appendChild(answerContainer);
    //Question One - answer 1
    var answerOne = document.createElement("button");
        answerOne.className = "answer-One";
        answerOne.textContent = "1. strings";
        answerContainer.appendChild(answerOne);
        answerOne.addEventListener("click", event => {
            console.log("incorrect!");
            removeWrong();
})
    //Question One - answer 2
    var answerTwo = document.createElement("button");
        answerTwo.className = "answer-Two";
        answerTwo.textContent = "2. booleans";
        answerContainer.appendChild(answerTwo);
        answerTwo.addEventListener("click", event => {
            console.log("incorrect!");
        removeWrong();
})
    //Question One - answer 3
    var answerThree = document.createElement("button");
        answerThree.className = "answer-Three";
        answerThree.textContent = "3. alerts";
        answerContainer.appendChild(answerThree);
        answerThree.addEventListener("click", event => {
            questionContainer.remove();
            console.log("correct!");
            console.log("1 point");
            questionTwo();
})
    //Question One - answer 4
    var answerFour = document.createElement("button");
        answerFour.className = "answer-Four";
        answerFour.textContent = "4. numbers";
        answerContainer.appendChild(answerFour);
        answerFour.addEventListener("click", event => {
            console.log("incorrect!");
            removeWrong();
});
}


//QUESTION TWO---------------------------------------------------

var questionTwo = function() {
    //Wrong Answer
    var removeWrong = function() {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        questionThree();
}
    //Question Container
    var questionContainer = document.createElement("div");
        questionContainer.className = "question-container";
        mainEl.appendChild(questionContainer);

    //Question 2 - Question
    var question = document.createElement("h1");
        question.className = "question";
        question.textContent = "2.The condition in an if / else statement is enclosed with ________.";
        questionContainer.appendChild(question);

    //Answer Container
    var answerContainer = document.createElement("div");
        answerContainer.className = "answer-container";
        questionContainer.appendChild(answerContainer);

    //Question Two - answer 1
    var answerOne = document.createElement("button");
        answerOne.className = "answer-One";
        answerOne.textContent = "1. quotes";
        answerContainer.appendChild(answerOne);
        answerOne.addEventListener("click", event => {
            console.log("incorrect!");
            removeWrong();
});
    //Question Two - answer 2
    var answerTwo = document.createElement("button");
        answerTwo.className = "answer-Two";
        answerTwo.textContent = "2. curly brackets";
        answerContainer.appendChild(answerTwo);
        answerTwo.addEventListener("click", event => {
            console.log("incorrect!");
            removeWrong();
});
    //Question Two - answer 3
    var answerThree = document.createElement("button");
        answerThree.className = "answer-Three";
        answerThree.textContent = "3. parenthesis";
        answerContainer.appendChild(answerThree);
        answerThree.addEventListener("click", event => {    
            questionContainer.remove(); 
            console.log("correct!");
            console.log("1 point");
            questionThree();
});
    //Question Two - answer 4
    var answerFour = document.createElement("button");
        answerFour.className = "answer-Four";
        answerFour.textContent = "4. square brackets";
        answerContainer.appendChild(answerFour);
        answerFour.addEventListener("click", event => {
            console.log("incorrect!");
            removeWrong();
});
}


//QUESTION THREE---------------------------------------------------

var questionThree = function() {
    //Wrong Answer
    var removeWrong = function() {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        questionFour();
}
            //Question Container
    var questionContainer = document.createElement("div");
        questionContainer.className = "question-container";
        mainEl.appendChild(questionContainer);
    
            //Question Three - Question
    var question = document.createElement("h1");
        question.className = "question";
        question.textContent = "3.Arrays in JavaScript can be used to store __________.";
        questionContainer.appendChild(question);
    
            //Answer Container
    var answerContainer = document.createElement("div");
        answerContainer.className = "answer-container";
        questionContainer.appendChild(answerContainer);

            //Question Three - answer 1
    var answerOne = document.createElement("button");
        answerOne.className = "answer-One";
        answerOne.textContent = "1. numbers & strings";
        answerContainer.appendChild(answerOne);
        answerOne.addEventListener("click", event => {
            console.log("incorrect!");
            removeWrong();
})
            //Question Three - answer 2
    var answerTwo = document.createElement("button");
        answerTwo.className = "answer-Two";
        answerTwo.textContent = "2. other arrays";
        answerContainer.appendChild(answerTwo);
        answerTwo.addEventListener("click", event => {
            console.log("incorrect!");
        removeWrong();
})
            //Question Three - answer 3
    var answerThree = document.createElement("button");
        answerThree.className = "answer-Three";
        answerThree.textContent = "3. booleans";
        answerContainer.appendChild(answerThree);
        answerThree.addEventListener("click", event => {
            console.log("incorrect!");
            removeWrong();
        })
            //Question Three - answer 4
    var answerFour = document.createElement("button");
        answerFour.className = "answer-Four";
        answerFour.textContent = "4. all of the above";
        answerContainer.appendChild(answerFour);
        answerFour.addEventListener("click", event => {
            questionContainer.remove();
            console.log("correct!");
            console.log("1 point");
            questionFour();
});
}


//QUESTIN FOUR---------------------------------------------------

    var questionFour = function() {
    //Wrong Answer
        var removeWrong = function() {
            timeLeft = timeLeft - 10;
            questionContainer.remove();
            questionFive();
    }
        //Question Container
        var questionContainer = document.createElement("div");
            questionContainer.className = "question-container";
            mainEl.appendChild(questionContainer);

        //Question Four - Question
        var question = document.createElement("h1");
            question.className = "question";
            question.textContent = "4.String values must be enclosed within _____ when being assigned to varibles.";
            questionContainer.appendChild(question);

        //Answer Container
        var answerContainer = document.createElement("div");
            answerContainer.className = "answer-container";
            questionContainer.appendChild(answerContainer);

        //Question Four - answer 1
        var answerOne = document.createElement("button");
            answerOne.className = "answer-One";
            answerOne.textContent = "1. commas";
            answerContainer.appendChild(answerOne);
            answerOne.addEventListener("click", event => {
                console.log("incorrect!");
                removeWrong();
    })
        //Question Four - answer 2
        var answerTwo = document.createElement("button");
            answerTwo.className = "answer-Two";
            answerTwo.textContent = "2. curly brackets";
            answerContainer.appendChild(answerTwo);
            answerTwo.addEventListener("click", event => {
                console.log("incorrect!");
                removeWrong();
    })
        //Question Four - answer 3
        var answerThree = document.createElement("button");
            answerThree.className = "answer-Three";
            answerThree.textContent = "3. quotes";
            answerContainer.appendChild(answerThree);
            answerThree.addEventListener("click", event => {
                console.log("incorrect!");
                removeWrong();

    })
        //Question Four - answer 4
        var answerFour = document.createElement("button");
            answerFour.className = "answer-Four";
            answerFour.textContent = "4. parenthesis";
            answerContainer.appendChild(answerFour);
            answerFour.addEventListener("click", event => {
            questionContainer.remove();
            console.log("correct!");
            console.log("1 point")
            questionFive();
    });
}

//QUESTION FIVE---------------------------------------------------

    var questionFive = function() {
    //Wrong Answer
        var removeWrong = function() {;
            questionContainer.remove();
            enterScore();
            end = true;
    }
        //Question Container
        var questionContainer = document.createElement("div");
            questionContainer.className = "question-container";
            mainEl.appendChild(questionContainer);

        //Question Five - Question
        var question = document.createElement("h1");
            question.className = "question";
            question.textContent = "5.A very useful tool used during development and debugging for printing content to the debugger is:";
            questionContainer.appendChild(question);

        //Answer Container
        var answerContainer = document.createElement("div");
            answerContainer.className = "answer-container";
            questionContainer.appendChild(answerContainer);

        //Question Five - Answer 1
        var answerOne = document.createElement("button");
            answerOne.className = "answer-One";
            answerOne.textContent = "1. CamelCasing";
            answerContainer.appendChild(answerOne);
            answerOne.addEventListener("click", event => {
                console.log("correct!");
                console.log("1 point");
                questionContainer.remove();        
    })
        //Question Five - Answer 2
        var answerTwo = document.createElement("button");
            answerTwo.className = "answer-Two";
            answerTwo.textContent = "2. Uppercase";
            answerContainer.appendChild(answerTwo);
            answerTwo.addEventListener("click", event => {
                console.log("incorrect!");
                removeWrong();
    })
        //Question Five - Answer 3
        var answerThree = document.createElement("button");
            answerThree.className = "answer-Three";
            answerThree.textContent = "3. Case Sensitive";
            answerContainer.appendChild(answerThree);
            answerThree.addEventListener("click", event => {
                console.log("incorrect!");
                removeWrong();
    })
        //Question Five - Answer 4
        var answerFour = document.createElement("button");
            answerFour.className = "answer-Four";
            answerFour.textContent = "4. No Clue";
            answerContainer.appendChild(answerFour);
            answerFour.addEventListener("click", event => {
                console.log("incorrect!");
                removeWrong();
    });
}

