//This is the code layout for the game show and what we want.

var score = 0;
var userName 
var currentQuestion = 0;
var questionEl = document.getElementById("question");
var questionTotal = questions.length
var score = 0;
//this is where the user and high score mix

var c1 = document.getElementById("c1")
var c2 = document.getElementById("c2")
var c3 = document.getElementById("c3")
var c4 = document.getElementById("c4")
var nextButton = document.getElementById("nextButton");
//it event listener nextQ.addEventListener("click", nextQuestion)
//it function; function nextQuestion(){ goes from current question to next}

//when i click start it will start the quiz and put the timer on a count down
function questionLC(questionindex){
  // WHEN I answer a question
    var q =questions[questionindex];
    questionEl.innerHTML = (questionindex + 1) + ". " + q.questions;
    c1.innerHTML = q.choice1;
    c2.innerHTML = q.choice2;
    c3.innerHTML = q.choice3;
    c4.innerHTML = q.choice4;
}
//function for start
//function for end
//function for rendering

//game is a current place holder for event to happen after click to start game

// when game starts question one will show on screen where the "This is where questions will be placed"
// Answer one, two, three, and four will change text in which user may pick one
// the timer will count down during the time of user picking the question

// user gets answer correct, it will add one point to score and if user gets question wrong user loses more time
// bonus have a puase between each question to show user which answer was correct, the time will be puase for five seconds "5000"?


// this is for the onclick function of the game

    
    console.log(startBT)
    

    
    //GIVEN I am taking a code quiz
  //  WHEN I click the start button
      

        
        





  //  THEN I am presented with another question

function nextQuest(){
  var pickedChoice = document.querySelector("input[type=radio]:checked")
  if(!pickedChoice){
    alert("Must pick an answer");
    return;
  }
  var answer = pickedChoice.value
  if(questions[currentQuestion].answer == answer){
    score += 1;
  }
  pickedChoice.checked = false;
  currentQuestion++;
  if (currentQuestion == questionTotal -1){
    nextButton.textContent ="Done";}
    
    if(currentQuestion == questionTotal){
    var userName =prompt("your name")
    localStorage.getItem(userName)
    localStorage.getItem(score)
    return;
  }
  nextQuest(currentQuestion)
}
nextQuest(currentQuestion)
  
    //  WHEN I answer a question incorrectly
   // THEN time is subtracted from the clock
   
   // WHEN all questions are answered or the timer reaches 0
   // THEN the game is over
   

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
highScore();

   
  