//This is the code layout for the game show and what we want.

var score = 0;
var userName 
var currentQuestion = 0;
var questionEl = document.getElementById("question")
var nextQ = document.getElementById("next")
//this is where the user and high score mix
var startTime = 70;
var time = startTime
var countDownEl = document.getElementById("timer")
//it event listener nextQ.addEventListener("click", nextQuestion)
//it function; function nextQuestion(){ goes from current question to next}
var c1 = document.getElementById("choice1")
var c2 = document.getElementById("choice2")
var c3 = document.getElementById("choice3")
var c4 = document.getElementById("choice4")
var text1 = document.getElementById("textanswer1")
var text2 = document.getElementById("textanswer2")
var text3 = document.getElementById("textanswer3")
var text4 = document.getElementById("textanswer4")
//when i click start it will start the quiz and put the timer on a count down


var startBT = document.getElementById("start")
startBT.addEventListener("click", gameStart)
//game is a current place holder for event to happen after click to start game

// when game starts question one will show on screen where the "This is where questions will be placed"
// Answer one, two, three, and four will change text in which user may pick one
// the timer will count down during the time of user picking the question

// user gets answer correct, it will add one point to score and if user gets question wrong user loses more time
// bonus have a puase between each question to show user which answer was correct, the time will be puase for five seconds "5000"?

function gameStart(){
    var userName = prompt("Please enter a name.")
        
        console.log(startBT)
        console.log(userName)
        
    //for(time = 0) {
       // return score 
        
}
