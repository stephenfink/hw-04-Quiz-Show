var userName = ""

// grabs local storage and element and then sets element equal to storage
var score = document.querySelector("#score");
var result = localStorage.getItem("result");
score.textContent = result;

// creating the player object to store High scores
var HighScore = JSON.parse(localStorage.getItem("highScore"))
if( HighScore === null){
highScore = {
    name: [],
    score: []
};
};
// adding this to highscore page 
var submit = document.querySelector("#submit");

submit.addEventListener("click", function(){
    event.preventDefault();
    userName = document.querySelector("#hsInitial").value;
    
    if(userName === ""){
        alert("You must fill out a name for a score to pair")
    }else{
        leaderboard.initial.push(userName)
        leaderboard.score.push(result)
        localStorage.setItem("highScore", JSON.stringify(leaderboard))
        window.location.replace("highScores.html");
    }
});