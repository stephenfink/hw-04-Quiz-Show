  
// this is the functions to make the leaderboards

var list = document.querySelector("#highScores")
var leaderboard = JSON.parse(localStorage.getItem("leaderboard"))
console.log(leaderboard)
console.log(leaderboard.score.length)
// the for loop to keep making user names
function renderScores(){
    for(var i = 0; i < leaderboard.score.length; i++){
        var li = document.createElement("li")
        li.textContent = leaderboard.initial[i] + ", Score: " + leaderboard.score[i]
        li.classList.add("list-group-item")
        list.appendChild(li)
    }
};

renderScores()