var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var timeInterval = 0
var timeLeft = 70
var questionEl = document.getElementById("question")
var opt1 = document.getElementById("c1");
var opt2 = document.getElementById("c2");
var opt3 = document.getElementById("c3");
var opt4 = document.getElementById("c4");
var start = document.getElementById("startButton")
var time = document.getElementById("time")
var nextButton = document.getElementById("nextButton");

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
    time.innerHTML = timeLeft;
    if(timeLeft <= 0){
      timeLeft = 0
      //quiz should be over
      clearInterval(timeInterval);
    }
  },1000);
}
setTime()






//the next question
function loadNextQuestion(){
    var selectedOption = document.querySelector("input[type=radio]:checked");
    if(!selectedOption){
        alert("Please select your answer!");
        return;
        
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 1;
        console.log(answer)
        
    }
    selectedOption.checked = false;
    
    currentQuestion++;
    if (currentQuestion == totQuestions -1){
        nextButton.textContent = "finish";
    }
    if (currentQuestion == totQuestions){
      var userName= prompt("your name")
      localStorage.setItem(userName)
      localStorage.setItem(score)
      loc
      c1.textContent = "Your Score: " + score;
      c2.textContent = "User Name: " +userName;
        return;
     
    }

    localStorage.setItem(userName , score)
    
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);

//GIVEN I am taking a code quiz

//WHEN I click the start button
// click start buttton
start.addEventListener("click",)
console.log(start)
//THEN a timer starts and I am presented with a question
  //start button starts timer, and question(0)
  //timer function
  //question function
    // 1 right: 3 wrong
    //wrong answers is -time
    //answering right adds to score
    //answering question moves to next question *6
    //if user runs out of time 
  




//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score