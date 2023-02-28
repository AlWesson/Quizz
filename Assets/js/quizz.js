var quest = document.querySelector("p"); // loading questionz array here.
var start = document.querySelector("#Start-Quizz");
var timerEl = document.querySelector(".timer");
var nextQuestion = 0; // questionz array index;
var remainingTime = 60;
// This will be my array of the text portion of the questions.
var questionz = [['There are 2 test tubes placed within a chemical dispenser. The first nozzel dispenses 3mL of chemical at a time, and the second nozzel despenses 2mL at a time. Both nozzles can take away 1mL of chemical from the test tubes at a time. Which pattern of dispensing and taking is correct to get both test tubes to 4mL?'],['You can only enable one rail path. Which path should you enable to get the train from point A to point B?'],[''],[''],['']];

// This array will hold the image portions of the questions. 
// var pics = [[],[],[],[],[]]; 


function setTimer() {
    var timerInterval = setInterval(function() {
        remainingTime--;
        timerEl.textContent = "Timer: " + remainingTime;
        if(remainingTime === 0) {
            clearInterval(timerInterval);
            timeDone();
        }

    }, 1000);

}

function timeDone() {
    timerEl.textContent = "TIME IS UP!!";
}


start.addEventListener("click" , function() {
    setTimer();

} 
);
