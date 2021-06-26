var timeEl = document.querySelector(".timer");

var start = document.querySelector(".start");
var highscores = document.querySelector(".highscores");
var submit = document.querySelector(".submit");
var back = document.querySelector(".back");
var clear = document.querySelector(".clear");


  var questions = [{
      question: "Commonly used data types do not include:",
      choices: [
      "1. strings",
      "2. booleans",
      "3. alerts",
      "4. numbers"],
        correctAnswer: 2
  },
  {
      question: "The condition is an if/else statement is enclosed within ____.",
      choices: [
        "1. quotes",
        "2. curly brackets",
        "3. parentheses",
        "4. square breackets"],
            correctAnswer: 2
},
{
        question: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "1. numbers and strings",
              "2. other arrays",
              "3. booleans",
              "4. all of the above"],
                correctAnswer: 4
          },
          {
              question: "String values must be enclosed within ____ when being assigned to variables.",
              choices: [
                  "1. commas",
                  "2. curly brackets",
                  "3. quotes",
                  "4. parentheses"],
                  correctAnswer: 3
          },
            
          {
              question: "A very useful tool used during development and debugging for printing content to the debugger is:",
              choices: [
                "1. JavaScript",
                "2. terminal/bash",
                "3. for loops",
                "4. console.log"],
                correctAnswer: 3
              }];
