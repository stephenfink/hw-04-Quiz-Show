var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var timeInterval = 0
var timeLeft = 70
var questionEl = document.getElementById("question")
var btn1 = document.getElementById("c1");
var btn2 = document.getElementById("c2");
var btn3 = document.getElementById("c3");
var btn4 = document.getElementById("c4");
var start = document.getElementById("startButton");
var time = document.getElementById("time");
var nextButton = document.getElementById("nextButton");



//GIVEN I am taking a code quiz

//WHEN I click the start button
// click start buttton
//THEN a timer starts and I am presented with a question
  //start button starts timer, and question(0)
  //timer function
  //question function
    // 1 right: 3 wrong
    //wrong answers is -time
    //answering right adds to score
    //answering question moves to next question *6
    //if user runs out of time 
  
start.addEventListener("click",)



 //this is the question rotation functions
function loadQuestion(questionIndex){
  var q = questions[questionIndex];
  questionEl.textContent = (questionIndex ++) + ". " + q.question;
  c1.textContent = q.choice1;
  c2.textContent = q.choice2;
  c3.textContent = q.choice3;
  c4.textContent = q.choice4;
};

//start.addEventListener("click", setTime)





function setTime(){
  timeInterval = setInterval(function(){
    timeLeft--;
    time.textContent = timeLeft;
    if(timeLeft <= 0){
      timeLeft = 0
      //quiz should be over
      clearInterval(timeInterval);
    }
  },1000);
}
setTime()




console.log(start)





//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score