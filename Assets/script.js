i=60;
qCount=-1;
correct=0;
var answerChoice = document.getElementById('answers');
var highScore = document.getElementById('HS');
var result = document.getElementsByClassName("feedback")[0]

function Quiz(){
    $('.StartPage').hide();   
    Timer();
    DisplayQuestions();
}

function Timer(){
    document.getElementById('mycounter').innerHTML = "Time: " + i; 
        i--;
        if (i < 0 || questions.length === qCount) {
          $('#answers').hide();
          $('#questionPlaceholder').hide();
          $('#mycounter').hide();
          result.style.display ='none'
          AddScore();
        }
        else {
          setTimeout(Timer, 1000);
        }
    }

function DisplayQuestions()
{
    qCount++;
    answer = questions[qCount].correctAnswer;
    document.getElementById('questionPlaceholder').innerHTML = questions[qCount].question;
    answerChoice.innerHTML="";
    var choices = questions[qCount].answers;

     for(var i =0; i < choices.length;i++){
       var nextChoice = document.createElement("button");

        nextChoice.textContent = choices[i];
        answerBtn = answerChoice.appendChild(nextChoice).setAttribute("value",choices[i]);
 }
}

function AddScore(){
    userName = document.getElementById('userName').nodeValue;

    var userScore= {
        name: userName,
        score: correct
    }

    var Scores = JSON.parse(localStorage.getItem("scores") || "[]")

    Scores.push(userScore)
    localStorage.setItem("scores",JSON.stringify(Scores));

    window.location.href = './scores.html'
}

var questions =[
    {
        question: "All interactive websites use JavaScript",
        answers:["true","false"],
        correctAnswer: 'true'
    },
    {
        question: "Which built-in method removes the last element from an array and returns that element?",
        answers:["last()","pop()","first()","get()"],
        correctAnswer: 'pop()'
    },
    {
        question: "Which of the following function of Boolean object returns a string containing the source of the Boolean object?",
        answers:["toSource()","valueOf()","toString()","toUpper()"],
        correctAnswer: 'toSource()'
    },
    {
        question: "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
        answers:["slice()","replace()","search()","split()"],
        correctAnswer: 'split()'
    },
    {
        question: "Which of the following function of Array object extracts a section of an array and returns a new array?",
        answers:["reverse()","shift()","slice()","map()"],
        correctAnswer: 'slice()'
    }

]



answerChoice.addEventListener("click",function(e) {

    if (answer === e.target.textContent){
        correct++;
        result.innerHTML = "Previous answer was correct";
 
    }
    else{
        i = i-5;
        result.innerHTML = "Previous answer was wrong";
 
    }
    DisplayQuestions();
});