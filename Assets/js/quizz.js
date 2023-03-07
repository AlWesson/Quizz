let quest = document.querySelector("#quizzContents"); 
let main = document.querySelector("main_box");
let start = document.getElementById("Start-Quizz");
let timerEl = document.getElementById("timer");
let parentOfPic = document.getElementById("picGoesAfterThis"); // parent of where I'll dynamically place my images.
let quizzPic = document.createElement('img'); 
let textPortionEl = document.getElementById('textPortion'); // text portion of question.
let multiChoiceEl = document.querySelectorAll('.multiChoice'); // radio button group class.
let submitEl = document.getElementById('submit');
let clearEl = document.getElementById('clearHistory');
let board = document.getElementById('leaderboards');
let initialsEl = document.querySelector('#initials');
let yoursEl = document.getElementById("yours");
let re = document.getElementById("return");

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

let scoreObj = {}; //Initials: '', Score: ''
let scoreArray = [];


// This will be my array holding img, question text, answer selection, and correct answer.
let questionz = [{pic: "./Assets/images/quest_1.jpg", question: 'There are 2 test tubes placed within a chemical dispenser. The first nozzel dispenses 3mL of chemical at a time, and the second nozzel despenses 2mL at a time. Both nozzles can withdraw 1mL of chemical from the test tubes at a time. Which pattern of dispensing and withdrawing is correct to get both test tubes to 8mL?', a:"dispense x2, withdraw x4, dispense x5", b:"dispense x3, withdraw x2, dispense x1, withdraw x4", c:"withdraw x2, dispense x5, withdraw x8, dispense x1", d:"withdraw x1, dispense x3, withdraw x2", correctAnswer: 'b'}, {pic: './Assets/images/quez_2.jpg', question: 'Which path should start to get the train from point A to point B?', a:"A", b:"B", c:"C",d:"D", correctAnswer: 'c' },{pic: './Assets/images/cat.jpg', question: 'Guess his name', a:"Peachy", b:"Buzz", c:"Mufasa", d:"Baby", correctAnswer: 'c'}];


function refresh () {
    
    window.location.reload()
}

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

// adding new scores to the local storage and recording to the page via loadBoard call. 
function recordUrScore() {
    
    if(initialsEl.value === ""){
        alert("No initials were input.");
    }
    else{
        
        scoreObj.Initials = initialsEl.value;
        scoreObj.Score = timerResult;
        //let reScore = JSON.parse(scoreArray);
        //reScore.push(scoreObj);
        //console.log(scoreObj);
        //scoreArray = JSON.parse(scoreArray);
        scoreArray.push(scoreObj);
        clearScores();
        localStorage.setItem('scoreArray', JSON.stringify(scoreArray));

        loadBoard();
        playThis(1);

        submitEl.disabled = true;
    }
}

// clears initials and scores from local storage.
function clearScores () {
    localStorage.clear();
    yoursEl.textContent = '';
}

// loads local storage and writes to the leaderboard.
function loadBoard () {
    scoreArray = localStorage.getItem('scoreArray');
    let arr = localStorage.getItem('scoreArray');
    scoreArray = JSON.parse(scoreArray);
    //console.log(scoreArray);
    if (!localStorage.getItem('scoreArray')){
        yoursEl.textContent = '';
        scoreArray = [];
    }
    
    else{
        
           /*var li = document.createElement("li")
           li.innerHTML = arr;//JSON.stringify()
           yoursEl.appendChild(li);*/
        
        // This shows the leaderboards to the page, but it isnt clean.
        for(let i = 0; i < scoreArray.length; i++){
            
                var li = document.createElement("li")
                li.innerHTML = JSON.stringify(scoreArray[i]);
                yoursEl.appendChild(li);
           
        }
        

    }
    
}

// function to set a sound file path depending on which option is chosen.
function playThis(num){
    if(num === 0){
    endSound = new Audio("./Assets/sound/cuckoo_clock1_x.wav");
    endSound.play();
    }
    if(num === 1){
        endSound = new Audio("./Assets/sound/drum_roll_y.wav");
        endSound.play();
    }  
    if(num === 2){
        endSound = new Audio("./Assets/sound/coin_flip.wav");
        endSound.play();
    }
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

function selectedButton () {
    let n;
    multiChoiceEl.forEach(choice => {if(choice.checked){n = choice.id;}})
    return n;
}
//

// This fucntion sets the timer and starts it when called.
function setTimer() { 
    
    
    var timerInterval = setInterval(function() {
        remainingTime--;
        timerEl.textContent = "Timer: " + remainingTime;
        if(remainingTime === 0) {
            
            timeDone();// message triggered when timer reaches 0.
            
            playThis(0);// sound file is played when timer reaches 0.
            clearInterval(timerInterval);
            timerResult = 0;
            quizzDone();
            
        }
        // if quiz is done before the timer, then remainingTime is set to -1 inside of the quizzDone function and is stopped here.
        if(remainingTime <= -1){
            clearInterval(timerInterval);
        }

    }, 1000);

}

// message to replace the timer. I have this set to trigger when the timer reaches 0.  
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
    loadBoard();
    
    

}
function quizzDone() {
    toHide('next');
    toHide('picGoesAfterThis');
    toShow('leaderboards');
    remainingTime = -1;

}



nextEl.addEventListener('click',() => {
    let mulChecked = document.querySelector('input[type=radio][name=optionz]:checked');
    if(mulChecked === null){alert("please make a selection.");}
    else{
    let selected = selectedButton();
    if(selected){
        if(selected !== questionz[questionNumber].correctAnswer) {
            remainingTime = remainingTime - 10;
        }
    }
    questionNumber++;
    if(questionNumber < questionz.length){
        clearButtons();
        quizMaterial();
        playThis(2);
    }
    else {
        timerResult = remainingTime;
        toHide('timer'); 
        playThis(2);
        quizzDone();
    }
}
});
// event listener that triggers when the start button is clicked.
start.addEventListener("click" , startUpQuizz);
submitEl.addEventListener("click", recordUrScore);
clearEl.addEventListener("click", clearScores);
re.addEventListener("click", refresh);