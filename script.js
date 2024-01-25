let playerChoice = prompt("What do you think will win, Rock, Paper, or Scissors?", "")
playerChoice = toLower(playerChoice)

if (playerChoice != "rock" || playerChoice != paper || playerChoice != scissors){
    alert('Try again, only "Rock", "Paper", or "Scissors"', "");
}

