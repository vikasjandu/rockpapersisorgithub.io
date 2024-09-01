let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
    const options = ["rock", "paper", "sciesor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () => {

    msg.innerText = ("Game was draw,Play again")
    msg.style.backgroundColor = "blue";
}
const shoWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `you Win! yours ${userChoice}beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;

        msg.innerText = `you lose.${compChoice}beats yours ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => { 

    const compChoice = genCompChoice();


    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice = "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "sciesor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        shoWinner(userWin, userChoice, compChoice);
    }


};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);

    });
});