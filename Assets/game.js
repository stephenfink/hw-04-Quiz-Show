//This is the code layout for the game show and what we want.

var score = 0;
var userName 
var currentQuestion = 0;
var questionEl = document.getElementById("question")
var nextQ = document.getElementById("next")
//this is where the user and high score mix
var startTime = 70; //seconds

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

//function for start
//function for end
//function for rendering

var startBT = document.getElementById("start")
startBT.addEventListener("click", timerSet)
//game is a current place holder for event to happen after click to start game

// when game starts question one will show on screen where the "This is where questions will be placed"
// Answer one, two, three, and four will change text in which user may pick one
// the timer will count down during the time of user picking the question

// user gets answer correct, it will add one point to score and if user gets question wrong user loses more time
// bonus have a puase between each question to show user which answer was correct, the time will be puase for five seconds "5000"?


// this is for the onclick function of the game
function timerSet(){
    timeInterval = setInterval(function(){
    startTime--;
    countdownEl.innerHTML(startTime);
    
    if(startTime <= 0){
        startTime = 0 
        clearInterval(timeInterval);
    }
},70000);
}

timerSet()
    
    console.log(startBT)
    

    
    //GIVEN I am taking a code quiz
  //  WHEN I click the start button
      
       
        
        




function nextQuestion(){
// WHEN I answer a question
  for(var i = 0; i < questions.length; i++){
   questionEl = questions.question[i]
   text1 = questions.choice1[i]
   text2 = questions.choice2[i]
   text3 = questions.choice3[i]
   text4 = questions.choice4[i]
   
  }
  //  THEN I am presented with another question
}

function answerS(){
  var answer = clickedAnswer
  if(questions[currentQuestion].answer == answer){
    score += 1;
  }
  else if(!questions[currentQuestion].answer == answer){
    startTime -5
    
  }
  
    //  WHEN I answer a question incorrectly
   // THEN time is subtracted from the clock
   
   // WHEN all questions are answered or the timer reaches 0
   // THEN the game is over
   
}
function highScore(){
    // WHEN the game is over
    // THEN I can save my initials and score
    var userName = prompt("Please enter a name.")
    console.log(userName)
    localStorage.setItem(score)
    localStorage.setItem(userName)
    var scoreboard = userName + score
    document.createElement("<div>").innerText(scoreboard)

}


   
  