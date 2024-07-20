function getComputerChoice() {
    let choice = Math.random();
    return choice;
}

function getHumanChoice() {
    let choice = prompt('Peek your side:')
    if (choice.toLowerCase() == 'rock') return 0.2;
    else if (choice.toLowerCase() == 'paper') return 0.6;
    else if (choice.toLowerCase() == 'scissors') return 1;
    else if (choice.toLowerCase() == 'scissors') return 1;
    else {
        console.log('Oups, you wrote it wrong!');
        return 0;
    }
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    let rez = 0;

    if ((humanChoice <= 0.33) && (computerChoice <= 0.33) && rez == 0) {
        console.log('Tie! Rock does not beat rock!');
        rez++;
    }
    if ((humanChoice <= 0.33) && (0.33 < computerChoice < 0.67) && rez == 0) {
        console.log('Computer wins! Paper beats rock!');
        rez++;
        computerScore++;
    }
    if ((humanChoice <= 0.33) && (0.66 < computerChoice <= 1) && rez == 0) {
        console.log('Human wins! Rock beats scissors');
        rez++;
        humanScore++;
    }

    if ((0.33 < humanChoice <= 0.66) && (computerChoice <= 0.33) && rez == 0) {
        console.log('Human wins! Paper beats rock!');
        rez++;
        humanScore++;
    }
    if ((0.33 < humanChoice <= 0.66) && (0.33 < computerChoice < 0.67) && rez == 0) {
        console.log('Tie! Paper does not beat paper!');
        rez++;
    }
    if ((0.33 < humanChoice <= 0.66) && (0.66 < computerChoice <= 1) && rez == 0) {
        console.log('Computer wins! Scissors beat paper!');
        rez++;
        computerScore++;
    }
    
    if ((0.66 < humanChoice <= 1) && (computerChoice <= 0.33) && rez == 0) {
        console.log('Computer wins! Rock beats scissors!');
        rez++;
        computerScore++;
    }
    if ((0.66 < humanChoice <= 1) && (0.33 < computerChoice < 0.67) && rez == 0) {
        console.log('Human wins! Scissors beat paper');
        rez++;
        humanScore++;
    }
    if ((0.66 < humanChoice <= 1) && (0.66 < computerChoice <= 1) && rez == 0) {
        console.log('Tie! Scissors do not beat scissors!');
        rez++;
    }

}

function playGame() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    let humanScore = computerScore = 0;

    playRound(humanSelection, computerSelection);
}


