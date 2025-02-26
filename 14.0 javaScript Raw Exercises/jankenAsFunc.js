function jankenGame(humanChoice) {

  console.log(`You have choosen ${humanChoice}.`)
    
  let cpuChoice = Math.floor(Math.random()*3);
    console.log('CPU picked RN: ' + cpuChoice)
  
  if (cpuChoice === 0) {
    cpuChoice = 'rock'
  }
  
  else if (cpuChoice === 1) {
    cpuChoice = 'paper'
  }
  
  else if (cpuChoice === 2) {
    cpuChoice = 'scissors'
  }
  
  console.log(`Means CPU chose ${cpuChoice}.`);
  
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
  }