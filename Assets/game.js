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
var nextButton = document.getElementById("nextButton");
var time = document.getElementById("time")
// this sets the time
function setTime(){
  timeInterval = setInterval(function(){
    timeLeft--;
    time.textContent = timeLeft;
    if(timeLeft <= 0){
      timeLeft = 0
      clearInterval(timeInterval);
    }
  },7000);
}
setTime()





// this is the question rotation functions
function loadQuestion(questionIndex){
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + ". " + q.question;
    c1.textContent = q.choice1;
    c2.textContent = q.choice2;
    c3.textContent = q.choice3;
    c4.textContent = q.choice4;
};
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
    }
    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion == totQuestions -1){
        nextButton.textContent = "finish";
    }
    if (currentQuestion == totQuestions){
      var userName= prompt("your name")
     
      c1.textContent = "Your Score: " + score;
      c2.textContent = "User Name: " +userName;
        return;

    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);

//for local storage
