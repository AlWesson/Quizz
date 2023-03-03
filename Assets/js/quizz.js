let quest = document.querySelector(".quizzContents"); // loading questionz array here.
let start = document.getElementById("Start-Quizz");
let timerEl = document.getElementById("timer");
let nextQuestion = 0; // questionz array index;
let remainingTime = 61;
let timerResult = remainingTime; //variable I'll use to edit time.
let endSound;
let quizzPic = document.createElement("img"); // creates an image element.


// This will be my array holding img, question text, answer selection, and correct answer.
// input type="radio" can be used when the user must select one of multiple button choices.
let questionz = [{pic: ' [image here] ', question: 'There are 2 test tubes placed within a chemical dispenser. The first nozzel dispenses 3mL of chemical at a time, and the second nozzel despenses 2mL at a time. Both nozzles can take away 1mL of chemical from the test tubes at a time. Which pattern of dispensing and taking is correct to get both test tubes to 4mL?', optionz: ['a','b','c','d'], correctAnswer: 1}, {pic: ' [image here] ', question: 'You can only enable one rail path. Which path should you enable to get the train from point A to point B?', optionz: ['a','b','c','d'], correctAnswer: 2 },{pic: '[ image here ]', question: ' ', optionz: ['a','b','c','d'], correctAnswer: 0}];

// Hides element
function toHide(aSelection) {
    let a = document.getElementById(aSelection);
    a.style.display = 'none';
}
// Reveals element
function toShow(bSelection) {
    let b = document.getElementById(bSelection);
    b.style.display = 'block';
}
// function to set a sound file path to the endSound let. It then commands endSound to play the sound file.
function playThis(){
    endSound = new Audio("./Assets/sound/cuckoo_clock1_x.wav");
    endSound.play();
}
// Function to pull from the array of objects and placed them into designated location on page.
function everythingNeeded (intake) {
    

}

// This fucntion sets the timer and starts it when called.
function setTimer() { 
    
    
    var timerInterval = setInterval(function() {
        remainingTime--;
        timerEl.textContent = "Timer: " + remainingTime;
        if(remainingTime === 0) {
            clearInterval(timerInterval);
            // message triggered when timer reaches 0.
            timeDone();
            // sound file is played when timer reaches 0.
            playThis();
            //(Note to self: I will need to call a function that will end the quiz when the timer hits 0.)
        }

    }, 1000);

}



// message to replace the timer. I have this set to trigger when the timer reaches 0;
function timeDone() {
    timerEl.textContent = "TIME IS UP!!";
}

// this will call most of the functions on start event listener.
function startUpQuizz(event) {
    
    toHide('Start-Quizz');
    toShow('quizzContents');
    toShow('timer');
    setTimer();
    event.preventDefault();

}


// event listener that triggers when the start button is clicked.
start.addEventListener("click" , startUpQuizz);
