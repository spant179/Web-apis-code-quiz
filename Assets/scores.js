var resetButton = document.querySelector("button.resetButton");
var goBack = document.querySelector("button.goBack");

var highScore = JSON.parse(localStorage.getItem("scores")||"[]");
var allScores = document.getElementById("allScores");

highScore.sort(function (a,b){
    return b.score - a.score
})

for(var i=0; i <highScore.length;i++){
    var list = document.createElement("li")
    list.textContent = highScore[i].name + " ----> " + highScore[i].score
    allScores.appendChild(list)
}

resetButton.addEventListener("click",function(){
    localStorage.clear();
    window.location.href = './scores.html'
})

goBack.addEventListener("click",function(){
    history.back();
})