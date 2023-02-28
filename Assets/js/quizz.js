let quest = document.querySelector("p"); // loading questionz array here.
let start = document.getElementById("Start-Quizz");
let timerEl = document.querySelector(".timer");
let nextQuestion = 0; // questionz array index;
let remainingTime = 5;
let endSound;


// This will be my array holding img, question text, answer selection, and correct answer.
// input type="radio" can be used when the user must select one of multiple button choices.
let questionz = [{pic: ' [image here] ', question: 'There are 2 test tubes placed within a chemical dispenser. The first nozzel dispenses 3mL of chemical at a time, and the second nozzel despenses 2mL at a time. Both nozzles can take away 1mL of chemical from the test tubes at a time. Which pattern of dispensing and taking is correct to get both test tubes to 4mL?', optionz: ['a','b','c','d'], correctAnswer: 1}, {question: 'You can only enable one rail path. Which path should you enable to get the train from point A to point B?'},{},{},{}];

function playThis(){
    endSound = new Audio("cuckoo_clock1_x.wav");
    endSound.play();
}


function setTimer() { 
    
    var timerInterval = setInterval(function() {
        remainingTime--;
        timerEl.textContent = "Timer: " + remainingTime;
        if(remainingTime === 0) {
            clearInterval(timerInterval);
            timeDone();
            playThis();
        }

    }, 1000);

}

function timeDone() {
    timerEl.textContent = "TIME IS UP!!";
}


start.addEventListener("click" , setTimer);
