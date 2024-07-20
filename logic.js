function getComputerChoice() {
    let choice = Math.random()
    return choice
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

function playRound(humanChoice, computerChoice) {
    if ((humanChoice <= 0.33) && (computerChoice <= 0.33)) 
        console.log('Tie! Rock does not beat rock!');
    if ((humanChoice <= 0.33) && (0.33 < computerChoice < 0.67)) 
        console.log('Computer wins! Paper beats rock!');
    if ((humanChoice <= 0.33) && (0.66 < computerChoice <= 1)) 
        console.log('Human wins! Rock beats scissors');

    if ((0.33 < humanChoice <= 0.66) && (computerChoice <= 0.33)) 
        console.log('Human wins! Paper beats rock!');
    if ((0.33 < humanChoice <= 0.66) && (0.33 < computerChoice < 0.67)) 
        console.log('Tie! Paper does not beat paper!');
    if ((0.33 < humanChoice <= 0.66) && (0.66 < computerChoice <= 1)) 
        console.log('Computer wins! Scissors beat paper!');
    
    if ((0.66 < humanChoice <= 1) && (computerChoice <= 0.33)) 
        console.log('Computer wins! Rock beats scissors!');
    if ((0.66 < humanChoice <= 1) && (0.33 < computerChoice < 0.67)) 
        console.log('Human wins! Scissors beat paper');
    if ((0.66 < humanChoice <= 1) && (0.66 < computerChoice <= 1)) 
        console.log('Tie! Scissors do not beat scissors!');

}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
let humanScore = computerScore = 0;