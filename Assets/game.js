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
  title.textContent = "Operators"
  question.textContent = "What is the difference of these two; && and ||"
  ans1.textContent = "AND and NOT"
  ans2.textContent = "AND and AND"
  ans3.textContent = "AND and OR"
  ans4.textContent = "OR and AND"
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


// event for the timed quiz and if else statments for reaction of timer
// event listener that checks the question you are on then the correct answer for that question.
quizBlock.addEventListener("click", function(event) {
  event.preventDefault();
  //question 1 on html page
  if(currentQuestion === 1){
      if(event.target.matches("#cho4")) {
          ansCheck.textContent = "good job!"
          currentQuestion++
          questionTwo()
      }else{
          ansCheck.textContent = "Sorry it was answer number 4"
          secondsLeft = secondsLeft - 10
          currentQuestion++
          questionTwo()
      }
      //question 2-4 on JS
  }else if(currentQuestion === 2){
      if(event.target.matches("#cho3")) {
          ansCheck.textContent = "Correct!"
          currentQuestion++
          questionThree()
      }else{
          ansCheck.textContent = "Sorry it was answer number 2"
          secondsLeft = secondsLeft - 10
          currentQuestion++
          questionThree()
      }
  }else if(currentQuestion === 3){
      if(event.target.matches("#cho1")) {
          ansCheck.textContent = "Correct!"
          currentQuestion++
          questionFour()
      }else{
          ansCheck.textContent = "Sorry the answer was console.log()"
          secondsLeft = secondsLeft - 10
          currentQuestion++
          questionFour()
      }
  }else{
      if(event.target.matches("#cho3")) {
          ansCheck.textContent = "yay that was right"
          currentQuestion++
          clearInterval(timerInterval);
          alert("YOU DID IT!!!")
       
      }else{
          ansCheck.textContent = "and sorry wrong one"
          secondsLeft = secondsLeft - 10
          currentQuestion++
          clearInterval(timerInterval);
          alert("Game Over, Try again")
          
      }
  }
  
});
