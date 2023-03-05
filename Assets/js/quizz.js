let quest = document.querySelector("#quizzContents"); 
let start = document.getElementById("Start-Quizz");
let timerEl = document.getElementById("timer");
//let quezEl = document.getElementById('quez'); // question header
let parentOfPic = document.getElementById("picGoesAfterThis"); // parent of where I'll dynamically place my images.
let quizzPic = document.createElement('img'); 
let textPortionEl = document.getElementById('textPortion'); // text portion of question.
let multiChoiceEl = document.querySelectorAll('.multiChoice'); // radio button group class.

// All the label ids for my radio buttons.
let A = document.getElementById('_A');
let B = document.getElementById('_B');
let C = document.getElementById('_C');
let D = document.getElementById('_D');

// button to go to the next question
let nextEl = document.getElementById('next');

let questionNumber = 0; // questionz array index;
let remainingTime = 61;
let timerResult = remainingTime; //variable I'll use to edit time.
let endSound; // time's up sound.


// This will be my array holding img, question text, answer selection, and correct answer.
let questionz = [{pic: "./Assets/images/cat.jpg", question: 'There are 2 test tubes placed within a chemical dispenser. The first nozzel dispenses 3mL of chemical at a time, and the second nozzel despenses 2mL at a time. Both nozzles can withdraw 1mL of chemical from the test tubes at a time. Which pattern of dispensing and withdrawing is correct to get both test tubes to 4mL?', a:"", b:"", c:"", d:"", correctAnswer: 'b'}, {pic: ' [image here] ', question: 'You can only enable one rail path. Which path should you enable to get the train from point A to point B?', a:"", b:"", c:"",d:"", correctAnswer: 'c' },{pic: '[ image here ]', question: ' ', a:"", b:"", c:"", d:"", correctAnswer: 'a'}];

// Hides elements function
function toHide(aSelection) {
    let a = document.getElementById(aSelection);
    a.style.display = 'none';
}
// Reveals elements function
function toShow(bSelection) {
    let b = document.getElementById(bSelection);
    b.style.display = 'block';
}

function alterButton () {
    let next = start;

}

// function to set a sound file path to the endSound let. It then commands endSound to play the sound file.
function playThis(){
    endSound = new Audio("./Assets/sound/cuckoo_clock1_x.wav");
    endSound.play();
}
// Function to pull from the array of objects and placed them into designated location on page.
function quizMaterial () {

    let quizArray = questionz[questionNumber];
    quizzPic.setAttribute('src', quizArray.pic);
    quizzPic.setAttribute("style", "max-width: 640px; box-shadow: 0 4px 9px 0 black; border-radius: 12px;");
    parentOfPic.prepend(quizzPic);
    textPortionEl.innerHTML = quizArray.question;
    _A.innerHTML = quizArray.a;
    _B.innerHTML = quizArray.b;
    _C.innerHTML = quizArray.c;
    _D.innerHTML = quizArray.d;
}

function clearButtons () {
    multiChoiceEl.forEach(choice => choice.checked = false)
}

function selectedA () {
    let n;
    multiChoiceEl.forEach(choice => {if(choice.checked){n = choice.id}})
    return n;
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
    event.preventDefault();
    toHide('Start-Quizz');
    toShow('next')
    toShow('quizzContents');
    toShow('timer');
    setTimer();
    quizMaterial();
    

}


// event listener that triggers when the start button is clicked.
start.addEventListener("click" , startUpQuizz);
