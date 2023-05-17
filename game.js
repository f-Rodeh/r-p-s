let userScore = 0;
let computerScore = 0;

const body = document.querySelector('body');
const results = document.createElement('div');
const scores = document.querySelector('#scores');
const txtOutput = document.querySelector('#charText')
const buttons = document.querySelectorAll('#user-choice > button');

let txt = '// Pick your ###foolish## guess,### little mouse#.##.####.'
typeCharTxt(txt)

function typeCharTxt(str) {
  toggle(buttons);
  let i = 0;

  const interval = setInterval(() => {

    if (str[i] !== '#') {
      txtOutput.textContent += str[i];
    }
    i++
    if (i === str.length) {
      clearInterval(interval);
      toggle(buttons)
      return;
    };

  }, 70);
}

buttons.forEach((button) => {
  button.classList.toggle('invisible')
  button.addEventListener('click', () => {
    if (!button.classList.contains('invisible')) {
      playRound(button.id)
    }
  })
})


function toggle(nodeList) {
  nodeList.forEach((item) => {
    item.classList.toggle('invisible');
  })
}


function playRound(userChoice) {

  if (userScore >= 5 || computerScore >= 5) return;

  let computerChoice = randomChoice()
  let msg = ""
  let winner = decideWinner(userChoice, computerChoice)

  // Set msg
  switch (winner) {
    case "user":
      userScore++
      msg = 'Hmmm##.###.#####. I guess ' + userChoice + ' beats ' + computerChoice
        + '.### you win this round.'
      break;
    case "computer":
      computerScore++
      msg = "HAHAHA! that's funny.### " + computerChoice + " beats " + userChoice
        + "!### you lose this round."
      break;
    case "tie":
      msg = userChoice + ' vs ' + computerChoice
        + '?### this round is a tie.'
      break;
  }

  // Display score
  scores.textContent =
    `Your score: ${userScore} | Computer score: ${computerScore}`;
    
  if (userScore >= 3) {
    displayWinner('user')
    return
  } else if (computerScore >= 3) {
    displayWinner('computer')
    return
  } else msg += ' ###>> Next #.##.####.'

  // Display results
  txtOutput.textContent = '';
  typeCharTxt(msg, () => { })

  
}

function updateScore(){

}

function displayWinner(winner) {
  let msg = '';

  if (winner === 'user'){ 
    msg = 'You won 3 rounds! game over.';
  } else if ( winner === 'computer') {
    msg = 'I won 3 rounds! game over.';
  } else msg = 'error';

  txtOutput.textContent = '';
  typeCharTxt(msg);

  buttons.forEach(button => {
    button.classList.toggle('invisible')
  })

}

// returns "rock" / "paper" / "scissors"
function randomChoice() {
  let randomNumber = Math.random()
  if (randomNumber < 1 / 3) {
    return "rock"
  } else if (randomNumber < 2 / 3) {
    return "paper"
  } else if (randomNumber < 1) {
    return "scissors"
  }
}

// returns "user" / "computer" / "tie"
function decideWinner(userChoice, computerChoice) {
  switch (true) {
    case userChoice === 'rock' && computerChoice === 'scissors':
    case userChoice === 'paper' && computerChoice === 'rock':
    case userChoice === 'scissors' && computerChoice === 'paper':
      return 'user';  
    case userChoice === computerChoice:
      return 'tie'
    default:
      return 'computer'
  }
}