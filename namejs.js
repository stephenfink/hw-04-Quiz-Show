
var initials = ""

// User input gives us the score from the quiz
var score = document.querySelector("#score");
var result = localStorage.getItem("result");
score.textContent = result;

// turning data into an object that we can pull for the scores
var leaderboard = JSON.parse(localStorage.getItem("leaderboard"))
if( leaderboard === null){
leaderboard = {
    //Turn both initials and score into an array
    initial: [],
    score: []
};
};
console.log(leaderboard)
// store the player high score to local storage and display it for later
var submit = document.querySelector("#submit");
//prevents reset and collects data
submit.addEventListener("click", function(){
    event.preventDefault();
    initials = document.querySelector("#hsInitial").value;
    
    if(initials === ""){
        //this is to ensure we get a user name
        alert("A name is needed to pair your score")
    }else{
        leaderboard.initial.push(initials)
        leaderboard.score.push(result)
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
        window.location.replace("highScores.html");
    }
});