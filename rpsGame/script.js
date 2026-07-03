let userScore = 0
let compScore = 0
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
const options = ["rock","paper","scissors"];
const randomIdx = Math.floor(Math.random()*3);
return options[randomIdx];
};
const drawGame = () =>{
    msg.innerText = "Game has draw , play again.";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win , Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats Your ${userChoice}.`;
         msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
// now comp choice
const compChoice = genCompChoice();
if(userChoice === compChoice){
    //drawe
    drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        // paper, scissors
        userWin = compChoice === "paper"? false:true;
    }else if(userChoice  === "paper"){
        // rock , scissors
        userWin = compChoice === "scissors"? false: true;
    }else{
        // paper ,  rock
        userWin = compChoice === "rock"? false : true;
    }
    showWinner(userWin , userChoice , compChoice);
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice)
        
    })
})