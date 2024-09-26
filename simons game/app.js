let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["red", "yellow", "green", "purple"];

let h2 = document.querySelector('h2');

document.addEventListener("keypress", function() {
    if (started == false){
        console.log("Game started");
        started = true;

        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");

    // to set time for which flash will display:)
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 500);
}

function userFlash(btn) {
    btn.classList.add("flash2");

    // to set time for which flash will display:)
    setTimeout(function() {
        btn.classList.remove("flash2");
    }, 500);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random() * 3);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);

    // console.log("random index is", ranIdx);
    // console.log("random color is", ranColor);
    // console.log("random button is", ranBtn);

    gameSeq.push(ranColor);
    console.log("game sequence is", gameSeq);

    gameFlash(ranBtn);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerText = `Game Over! Your score = ${level}
        Press any key to start again`;
        reset();
    }
}

function btnPress() {
    // console.log("button was pressed", this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log("user sequence is", userSeq);

    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}