var timeLeft = document.querySelector("#timeLeft")
var ans1 = document.querySelector("#cho1")
var ans2 = document.querySelector("#cho2")
var ans3 = document.querySelector("#cho3")
var ans4 = document.querySelector("#cho4")
var ansCheck = document.querySelector("#ansCheck")
var quizBlock = document.querySelector("#quizBlock")
var title = document.querySelector("#title")
var question = document.querySelector("#question")
var secondsLeft = 120;
var currentQuestion = 1
var timerInterval = 0
//vars for 

// Interval start for the timer
function setTime() {
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeLeft.textContent = secondsLeft;
  
      if(secondsLeft <= 0) {
          secondsLeft = 0
          clearInterval(timerInterval);
      }
  
    }, 1000);
  }
  
  setTime()
  
// functions to give each question to the next question

function questionTwo(){
    title.textContent = "Event Listener"
    question.textContent = "What does it do?"
    ans1.textContent = "Mic input"
    ans2.textContent = "It can help buttons do things when you click on them"
    ans3.textContent = "A new type of answering machine"
    ans4.textContent = "A hearing aid"
}

function questionThree(){
    title.textContent = "Checking for Errors"
    question.textContent = "How can we tell javascript to track errors?"
    ans1.textContent = "console.log()"
    ans2.textContent = "error.log()"
    ans3.textContent = "input.errorcheck()"
    ans4.textContent = "check.errer()"
    }

function questionFour(){
    title.textContent = "Strings"
    question.textContent = "Which one is a string?"
    ans1.textContent = "function hello(world){}"
    ans2.textContent = "<h1>Hello</h1>"
    ans3.textContent = "var greetings= 'hello'"
    ans4.textContent = "var hi"

}
function questionFive(){
    title.textContent = "Operators"
    question.textContent = "What is the difference of these two; && and ||"
    ans1.textContent = "AND and NOT"
    ans2.textContent = "AND and AND"
    ans3.textContent = "AND and OR"
    ans4.textContent = "OR and AND"

}

