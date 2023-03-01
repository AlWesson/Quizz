let quest = document.querySelector(".quizzContents"); // loading questionz array here.
let start = document.getElementById("Start-Quizz");
let timerEl = document.querySelector(".timer");
let nextQuestion = 0; // questionz array index;
let remainingTime = 61;
let timerResult = remainingTime; 
let endSound;


// This will be my array holding img, question text, answer selection, and correct answer.
// input type="radio" can be used when the user must select one of multiple button choices.
let questionz = [{pic: ' [image here] ', question: 'There are 2 test tubes placed within a chemical dispenser. The first nozzel dispenses 3mL of chemical at a time, and the second nozzel despenses 2mL at a time. Both nozzles can take away 1mL of chemical from the test tubes at a time. Which pattern of dispensing and taking is correct to get both test tubes to 4mL?', optionz: ['a','b','c','d'], correctAnswer: 1}, {pic: ' [image here] ', question: 'You can only enable one rail path. Which path should you enable to get the train from point A to point B?', optionz: ['a','b','c','d'], correctAnswer: 2 },{pic: '[ image here ]', question: ' ', optionz: ['a','b','c','d'], correctAnswer: 0}];

function toHide(aSelection) {
    let a = document.getElementById(aSelection);
    a.style.display = 'none';
}
// function to set a sound file path to the endSound let. It then commands endSound to play the sound file.
function playThis(){
    endSound = new Audio("./Assets/sound/cuckoo_clock1_x.wav");
    endSound.play();
}

// This fucntion sets the timer and starts it when called.
function setTimer() { 
    toHide('Start-Quizz');
    var timerInterval = setInterval(function() {
        remainingTime--;
        timerEl.textContent = "Timer: " + remainingTime;
        if(remainingTime === 0) {
            clearInterval(timerInterval);
            // message triggered when timer reaches 0.
            timeDone();
            // sound file is played when timer reaches 0.
            playThis();
        }

    }, 1000);

}

// message to replace the timer. I have this set to trigger when the timer reaches 0;
function timeDone() {
    timerEl.textContent = "TIME IS UP!!";
}

// event listener that triggers when the start button is clicked. 
start.addEventListener("click" , setTimer);
