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
    //for(time = 0) {
       // return score 


            
        
        
    }

    function question(){
        document.getElementById("question").innerText("Javascript is what kind of language?")
    }
    //things to follow suit after this
    //time number counts down from base time to 0
    // when person answers question timer stops for user to read the correct answer (5000 as said above) 
    // this pauses time number from going down for a few seconds
    //after that time number will count down from current state
    //new question will pop up
    //when time reaches 0 the score data and the user name data will be added to high score 
    //this will stay as local storage

    

    
    //this is using the user input a name to save it for later

    // questions needs to be an in array so it can go in a loop till the timer runs out, the goal is to at least have 10 questions 
 
    //function questions(){}
        //question  :answer 
            //question 1 : Javascript is "what" kind of language?
                //rightanswer 1: a programming language
                //wronganswers 1: a foreign language, a magical language, coffee paper language
        
            //question 2: The button has a what type of event listener?
                //rightanswer 2 : "click"
                //wronganswers 2 : "event", "hearing", "keypress"

            //question 3: Now here's a hard one, what is the difference of these operators; "&&"" and "||""
                //rightanswer 3: "AND" and "OR"
                //wronganswers: "AND" and "NOT", "AND" and "AND", "OR" and "AND"
            
            //question 4: Here's an easy one; How can we check for errors of input using javascript?
                //rightanswer 4: console.log();
                //wronganswers: console.errors, error.log, check.error

            //question 5: which one is a string?
                //rightanswers 5: var greetings = "hello" , const hello ="Greetings"
                //wronganswers 5: var hi, function hello(){}

            //question 6: what is one way javascript can storage data?
                //rightanswer 6: localStorage.getItem()
                //wronganswers 6: localstorage.getItem(), localStorage.getItem{}, The Cloud

            //for each of these we need to have the question fill in where we have the text
            //for each we need each answer to fill in the text of answer
            // for each, the right answer must be set with the correct color, and wrong answers with wrong answer color
            // each time a question is right we add one point to score
            // each time a question is wrong we take off time
    //function userAnswers(){}
 
    // the timer and questions need to pace well with each other, 

    // need loop for questions till timer runs out








// we will use the localStorage to fill in high score