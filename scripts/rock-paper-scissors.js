
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

const rockButton = document.querySelector('.Rock');
const scissorsButton = document.querySelector('.Scissors');
const paperButton = document.querySelector('.Paper');
const resetScore = document.querySelector('.reset-score');

const rockImage = document.querySelector('rock-image');
const paperImage = document.querySelector('paper-image');
const scissorsImage = document.querySelector('scissors-image');

const autoPlayButton = document.querySelector(`.auto-play`);

document.body.addEventListener('keydown', (Event) => {
  if(Event.key === 'r'){
    game('Rock');
  }
  else if (Event.key === 'p') {
    game('Paper');
  }
  else if (Event.key === 's') {
    game('Scissors');
  }
})

let isPlaying = false;
let intervalId;
autoPlayButton.onclick = () => {
  if(isPlaying){
    clearInterval(intervalId)
    isPlaying = !isPlaying;
  } else {
    intervalId = setInterval(() => {
      game(pickComputerMove())},
      1000);
    isPlaying = !isPlaying;
  }

}

rockButton.addEventListener('click', () => game('Rock'));


scissorsButton.addEventListener('click', () => game('Scissors'));


paperButton.addEventListener('click', () => game('Paper'));


resetScore.addEventListener('click', () => resetScoreFunction())


const showMoves = (choice, computerMove ) => {
  document.querySelector('.view-moves').innerHTML = 
  `You ${choice}  ${computerMove} Computer`;
}

const showResult = (result) => {
  document.querySelector('.view-result').innerHTML = 
  `You ${result}`;
}

const resetScoreFunction = () => {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
}

const updateScoreElement = () => {
  document.querySelector('.score-view').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}
document.querySelector('.score-view').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`

const game = (choice) => {

  let result = ``
  
  let computerMove = ''
  computerMove = pickComputerMove(computerMove)
if(choice === computerMove){
  result = 'Tie'
  score.ties+=1
} else if((choice==='Rock')&&(computerMove=='Paper')){
  result = 'lost'
  score.losses+=1
} else if((choice==='Paper')&&(computerMove=='Scissors')){
  result = 'lost'
  score.losses+=1
} else if((choice==='Scissors')&&(computerMove=='Rock')){
  result = 'lost'
  score.losses+=1
} else {
  result = 'won'
  score.wins+=1

}

const whatImage =  (choice) => `<img class = "rock-image" src="images/${choice.toLowerCase()}-emoji.png"></img>`


localStorage.setItem('score', JSON.stringify(score));
showMoves(whatImage(choice), whatImage(computerMove));
showResult(result);
updateScoreElement();

}


const pickComputerMove = (computerMove) => {
  const randomNumber = Math.random();
  if(randomNumber<=1/3){
    computerMove = `Rock`
    } else if (randomNumber>1/3 && randomNumber<= 2/3){
      computerMove = `Paper`
    } else {
      computerMove = `Scissors`
    }
  return computerMove;
}