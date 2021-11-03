
var startBtn = document.querySelector(".start");
var highscoresBtn = document.querySelector("#highscoresBtn");
var highScoresDisplay = document.querySelector("#highscores");
var listScores = document.getElementById("highScoresList");
var submitBtn = document.querySelector("#submit");
var backBtn = document.querySelector(".back");
var clearBtn = document.querySelector(".clear");
var showScore = document.getElementById("score");
var finalScore = document.getElementById("finalscore");
var yourFinalScore = document.getElementById("yourFinalScore");
var input = document.getElementById("initialInput");


var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");
var gameIntro = document.getElementById("infobox");
var questionDisplay = document.getElementById("questions");
var askQuestion = document.getElementById("showquestions");
var questionsIndex = 0;
var yourScore = 0;
var questionsNumber = 0;
var choiceFeedBack = document.getElementById("choiceFeedBack");
var choiceList = document.getElementById("choices");

var choice1btn = document.getElementById("option1");
var choice2btn = document.getElementById("option2");
var choice3btn = document.getElementById("option3");
var choice4btn = document.getElementById("option4");




var questions = [{
    title: "Commonly used data types do not include:",
    choices: [
      "1. strings",
      "2. booleans",
      "3. alerts",
      "4. numbers"
    ],
    answer: 2
  },
  {
    title: "The condition is an if/else statement is enclosed within ____.",
    choices: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square breackets"
    ],
    answer: 2
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above"
    ],
    answer: 4
  },
  {
    title: "String values must be enclosed within ____ when being assigned to variables.",
    choices: [
      "1. commas",
      "2. curly brackets",
      "3. quotes",
      "4. parentheses"
    ],
    answer: 3
  },

  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log"
    ],
    answer: 3
  }
];

var totalTime = questions.length * 15;



function takeQuiz() {
    questionsIndex = 0;
    timeLeft.textContent = totalTime;
    questionDisplay.removeAttribute("class", "hide");
    timesUp.style.display = "none";
    var startTimer = setInterval(function() {
      totalTime--;
      timeLeft.textContent = totalTime;
      if(totalTime <= 0) {
          clearInterval(startTimer);
          if (questionIndex < questions.length - 1) {
            
            endGame();
          }
      }
  },1000);
    askQuestions();

  }

  function askQuestions() {
    
    gameIntro.setAttribute("class", "hide");
    console.log(questions[questionsIndex].title);
    console.log(questions[questionsIndex].choices);
    var qTitle = document.getElementById("qTitle");
    var currentQuestion = questions[questionsIndex];
    console.log(currentQuestion);
    
    choiceList.innerHTML = "";

    qTitle.textContent = currentQuestion.title;
    currentQuestion.choices.forEach(function(choice, i) {
      var userChoice = document.createElement("button");
      userChoice.setAttribute("class", "multiplechoice");
      userChoice.setAttribute("value", "choice");
      userChoice.textContent =  choice;
      choiceList.appendChild(userChoice);
      
      userChoice.onclick = choiceClick;

    })
  }

  

  function choiceClick() {
    if (!this.value== questions[questionsIndex].answer) {
      totalTime -=15;
      timeLeft.textConent = time;
      choiceFeedBack.textContent = "Wrong answer!";
    } else {
      choiceFeedBack.textContent = "Correct!";
      yourScore++;
    }
    
    questionsIndex++;
    if (questionsIndex < questions.length) {
      askQuestions();
    } else {
      
      endGame();
    }
  }

  function endGame() {
    questionDisplay
    questionDisplay.setAttribute("class", "hide");
    timer.setAttribute("class", "hide");
    timesUp.removeAttribute("class", "hide");
    showScore.removeAttribute("class", "hide");
    console.log(timeLeft);
    console.log(timeLeft.innerHTML);
    var yourFinalScore = timeLeft.innerHTML;
    finalScore.textContent = yourFinalScore;
    console.log(yourFinalScore);

  }
  function storeScores(event) {
    event.preventDefault();
    if(input.value == "") {
      alert("Please enter your initials!");
      return;
    }
    highscores.removeAttribute("class", "hide");
    var savedScores = localStorage.getItem("high scores");
    var highScoresArray;

    if(savedScores === null) {
      highScoresArray = [];
    } else {
      highScoresArray = JSON.parse(savedScores);
    }
    var savedUserScore = {
      initials: input.value,
      score: finalScore.textContent
    }

    console.log(savedUserScore);
    highScoresArray.push(savedUserScore);
    window.localStorage.setItem("high scores", JSON.stringify(highScoresArray));
    
    highScoresDisplay.removeAttribute("class", "hide");
    showScores();
    
  }

  function showScores() {
    showScore.setAttribute("class","hide");

    var savedHighScores = localStorage.getItem("high scores");
    var storedHighScores = JSON.parse(savedHighScores);
    console.log(storedHighScores);

    for (let i =0; i < storedHighScores.length; i++) {
      var eachNewHighScore = document.createElement("p");
      eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
      listScores.appendChild(eachNewHighScore);
  }
  }


clearBtn.addEventListener("click", function(){
  window.localStorage.removeItem("high scores");
  listScores.innerHTML="High scores cleared."
})

backBtn.addEventListener("click", function() {
  gameIntro.removeAttribute("class", "hide");
  highScoresDisplay.setAttribute("class", "hide");
})
submitBtn.addEventListener("click", function(event){
  storeScores(event);
})

startBtn.addEventListener("click", takeQuiz);
