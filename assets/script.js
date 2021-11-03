
var startBtn = document.querySelector(".start");
var highscores = document.querySelector(".highscores");
var submit = document.querySelector("#submit");
var back = document.querySelector(".back");
var clear = document.querySelector(".clear");

var timeEl = document.querySelector(".timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");
var gameIntro = document.getElementById("infobox");
var questionDisplay = document.getElementById("questions");
var askQuestion = document.getElementById("showquestions");
var questionsIndex = 0;
var yourScore = 0;
var questionsNumber = 0;
var choiceFeedBack = document.getElementById("choiceFeedBack");

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

var answer = [];

function takeQuiz() {
    questionsIndex = 0;
    totalTime = 150;
    timeLeft.textContent = totalTime;
    questionDisplay.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
      totalTime --;
      timeLeft.textConent = totalTime;
      if(totalTime ,+ 0) {
        clearInterval(startTimer);
        if (questionsIndex < questions.length - 1) {
          endGame();
        }
      }
    }, 1000);
  askQuestions();
  }

  function askQuestions() {
    gameIntro.style.display = "none";
    console.log(questions[questionsIndex].title);
    console.log(questions[questionsIndex].choices);
    var qTitle = document.getElementById("qTitle");
    var currentQuestion = questions[questionsIndex];
    console.log(currentQuestion);
    

    qTitle.textContent = currentQuestion.title;
    choice1btn.textContent = currentQuestion.choices[0];
    choice2btn.textContent = currentQuestion.choices[1];
    choice3btn.textContent = currentQuestion.choices[2];
    choice4btn.textContent = currentQuestion.choices[3];
  }

  

  function choiceClick() {
    if (!questions[questionsIndex].answer== questions[questionsIndex].choices[answer]) {
      totalTime -= 15;
      if (time < 0) {
        time =0;
      }
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


startBtn.addEventListener("click", takeQuiz);
choice1btn.addEventListener("click", choiceClick);
choice2btn.addEventListener("click", choiceClick);
choice3btn.addEventListener("click", choiceClick);
choice4btn.addEventListener("click", choiceClick);