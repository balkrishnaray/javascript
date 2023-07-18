let round = 0;
let playerScore = 0;
let computerScore = 0;
// console.log(computer.length);

while (true) {
  while (round < 3) {
    let array = ["s", "w", "g"];
    let computer = array[Math.floor(Math.random() * array.length)];
    let player = prompt("Enter S for Snake, W for Water or G for gun: ");
    if (
      player == "s" ||
      player == "S" ||
      player == "W" ||
      player == "w" ||
      player == "g" ||
      player == "G"
    ) {
      round++;
      if ((computer == "s" && player == "s") || player == "S") {
        alert(
          `computer choose snake you also choose snake, Round :${round} Tie`
        );
      } else if ((computer == "s" && player == "w") || player == "W") {
        alert(
          `computer choose snake you choose water, Round :${round} Computer wins`
        );
        computerScore++;
      } else if ((computer == "s" && player == "g") || player == "G") {
        alert(
          `computer choose snake you choose gun, Round :${round} Player wins`
        );
        playerScore++;
      } else if ((computer == "w" && player == "w") || player == "w") {
        alert(`computer choose water you choose water, Round :${round} Tie`);
      } else if ((computer == "w" && player == "s") || player == "S") {
        alert(
          `computer choose water you choose snake Round :${round} Player wins`
        );
        playerScore++;
      } else if ((computer == "w" && player == "g") || player == "G") {
        alert(
          `computer choose water you choose gun, Round :${round} Computer wins`
        );
        computerScore++;
      } else if ((computer == "g" && player == "g") || player == "G") {
        alert(`computer choose gun you choose gun, Round :${round} Tie`);
      } else if ((computer == "g" && player == "s") || player == "S") {
        alert(
          `computer choose gun you choose snake, Round :${round} Computer wins`
        );
        playerScore++;
      } else if ((computer == "g" && player == "w") || player == "W") {
        alert(
          `computer choose gun you choose water, Round :${round} Player wins`
        );
        computerScore++;
      }
    } else {
      alert("Invalid input enter S, W or G");
    }
  }

  if (playerScore > computerScore) {
    alert(
      `The player wins. Total score: player(${playerScore}): computer(${computerScore})`
    );
  } else if (playerScore < computerScore) {
    alert(
      `The Computer wins. Total score: computer(${computerScore}) : player(${playerScore}) `
    );
  } else if (playerScore == computerScore) {
    alert(
      `It is a Tie. Total score: computer(${computerScore}) : player(${playerScore}) `
    );
  }

  let con = confirm("Do you want to play again?");
  if (con) {
    round = 0;
    playerScore = 0;
    computerScore = 0;
  } else {
    break;
  }
}
