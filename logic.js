function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'rock'
      case 1:
        return 'paper'
      case 2:
        return 'scissors'
    }
  }

function humanPlay() {
    let play = prompt('Rock, paper, scissors?');
    play = play.toLowerCase();

    switch (play) {
        case 'rock':
            play = 0;
            break;
        case 'paper':
            play = 1;
            break;
        case 'scissors':
            play = 2;
            break;
        default:
            console.log('Oups, you picked something wrong!');
            break;
    }

    return play;
}

function playRound() {
    let computerSelection = computerPlay();
    let humanSelection = humanPlay();

    if (computerSelection == humanSelection) {
        roundWinner = 'Tie!';
    }

    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
      ) {
        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
      ) {
        computerScore++
        roundWinner = 'computer';
    }
    
    
}