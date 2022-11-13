const playBtn = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const match = document.querySelector(".match");

let pScore = 0;
let cScore = 0;

playBtn.addEventListener("click", ()=> {
    introScreen.classList.add("unactive");
    match.classList.add("active"); 
})

//play match function
function playMatch(){
    const options = document.querySelectorAll(".options button");
    const computerOptions = ["rock", "paper", "scissors"];
          
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");
            


    options.forEach(option => {
        option.addEventListener("click", function() {
            const computerNum = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNum];
            console.log(computerNum)
            console.log(computerChoice)
           
            // setTimeout(() => {
                //call compare hands function
                computerHands(this.textContent, computerChoice);

                playerHand.src = `./image/${this.textContent}.jpg`;
                computerHand.src = `./image/${computerChoice}.jpg`;
            // },2000);

            

            //animation
            playerHand.getElementsByClassName.animation = "shakePlayer 2s ease"
            computerHand.getElementsByClassName.animation = "shakeComputer 2s ease"
        });
        
    });

    // hands.forEach(hands => {
    //     hands.addEventListener("animationend", function(){
    //         this.style.animation = "";
    //     })
    // })
}
playMatch();

//compare hands function
function computerHands(playerChoice, computerChoice){
    const winner = document.querySelector(".winner");
    if(playerChoice === computerChoice){
        winner.textContent = "It's a Tie";
        return;
    }
    if(playerChoice === "rock"){
        if(computerChoice === "scissors"){
            winner.textContent = "Player Wins";
            // pScore++;
            // updateScore();
            return;
        }
        else{
            winner.textContent = "Computer Wins";
            // cScore++;
            // updateScore();
            return; 
        }
    }
    if(playerChoice === "paper"){
        if(computerChoice === "scissors"){
            winner.textContent = "Computer Wins";
            // cScore++;
            // updateScore();
            return;
        }
        else{
            winner.textContent = "Player Wins";
            // pScore++;
            // updateScore();
            return; 
        }
    }
    if(playerChoice === "scissors"){
        if(computerChoice === "rock"){
            winner.textContent = "Computer Wins";
            // cScore++;
            // updateScore();
            return;
        }
        else{
            winner.textContent = "Player Wins";
            // pScore++;
            // updateScore();
            return; 
        }
    }
}
//score function
// function updateScore(){
//     const playerScore = document.querySelector(".player-score p");
//     const computerScore = document.querySelector(".computer-score p");

//     playerScore.textContent = pScore;
//     computerScore.textContent = cScore;

// }
