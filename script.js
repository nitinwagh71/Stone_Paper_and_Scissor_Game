let userCount = 0;
let compCount = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

choices.forEach((val) => {
  val.addEventListener("click", () => {
    let userChoice = val.getAttribute("id");
    playGame(userChoice);
  });
});

const drawGame = () => {
  msg.innerText = "Game Draw.Play again..";
  msg.style.backgroundColor = "#081b31";
};

const playGame = (userChoice) => {
  // console.log("User choice = ", userChoice);
  let compChoice = genCompChoice();
  //  console.log("computer choice = ",compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //Paper,Scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock,scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock,paper
      userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin === true) {
    userCount++;
    userScore.innerText = userCount;
    msg.innerText = `You win! Your ${userChoice} beat ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compCount++;
    compScore.innerText = compCount;
    msg.innerText = `You lost!  ${compChoice} beat your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randomNo = Math.floor(Math.random() * 3);
  return options[randomNo];
};
