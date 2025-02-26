const humanChoice = prompt(`Write your move (rock, scissors or paper):`);
let cpuChoice = Math.floor(Math.random()*3);

if (cpuChoice === 0) {
  cpuChoice = 'rock'
}

else if (cpuChoice === 1) {
  cpuChoice = 'paper'
}

else if (cpuChoice === 2) {
  cpuChoice = 'scissors'
}

console.log(`CPU chose ${cpuChoice}.`);

if (humanChoice === 'rock' && cpuChoice === 'rock') {

  alert(`You have tied.`)

} else if (humanChoice === 'rock' && cpuChoice === 'paper') {
  
  alert(`You have lost.`)

} else if (humanChoice === 'rock' && cpuChoice === 'scissors') {

  alert(`You have won.`)

}

if (humanChoice === 'paper' && cpuChoice === 'rock') {

  alert(`You have won.`)

} else if (humanChoice === 'paper' && cpuChoice === 'paper') {
  
  alert(`You have tied.`)

} else if (humanChoice === 'paper' && cpuChoice === 'scissors') {

  alert(`You have lost.`)

}

if (humanChoice === 'scissors' && cpuChoice === 'rock') {

  alert(`You have lost.`)

} else if (humanChoice === 'scissors' && cpuChoice === 'paper') {
  
  alert(`You have won.`)

} else if (humanChoice === 'scissors' && cpuChoice === 'scissors') {

  alert(`You have tied.`)

}