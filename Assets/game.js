//This is the code layout for the game show and what we want.
var questions 
var score = 0;
var userName
//when i click start it will start the quiz and put the timer on a count down


var startBT = document.getElementById("start")
startBT.addEventListener("click", gameStart)
//game is a current place holder for event to happen after click to start game

// when game starts question one will show on screen where the "This is where questions will be placed"
// Answer one, two, three, and four will change text in which user may pick one
// the timer will count down during the time of user picking the question

// user gets answer correct, it will add one point to score and if user gets question wrong user loses more time
// bonus have a puase between each question to show user which answer was correct, the time will be puase for five seconds "5000"?

//when timer ends the game will stop, until the start button is click to restart it
//have a high score list base on local user input, also prompt for name after click event to record a high score
//this will reflect on the high score col. 
function gameStart(){
    var userName = prompt("Please enter a name.")
        localStorage.getItem(userName)
        console.log(startBT)
        console.log(userName)
}
    

    
    //this is using the user input a name to save it for later

    // questions needs to be an in array so it can go in a loop till the timer runs out, the goal is to at least have 10 questions 
 
    //function questions(){}
 

    //function userAnswers(){}
 
    // the timer and questions need to pace well with each other, 








// we will use the localStorage to fill in high score