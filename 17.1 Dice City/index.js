function rollDice() {
  const randomNumber1 = Math.floor(Math.random()*6) + 1
  console.log(`Player 1: ${randomNumber1}`)
  
  if (randomNumber1 === 1) {
    document.querySelector('.img1').setAttribute('src', './images/diceS1.png')
  } else if (randomNumber1 === 2) {
    document.querySelector('.img1').setAttribute('src', './images/diceS2.png')
  } else if (randomNumber1 === 3) {
    document.querySelector('.img1').setAttribute('src', './images/diceS3.png')
  } else if (randomNumber1 === 4) {
    document.querySelector('.img1').setAttribute('src', './images/diceS4.png')
  } else if (randomNumber1 === 5) {
    document.querySelector('.img1').setAttribute('src', './images/diceS5.png')
  } else {
    document.querySelector('.img1').setAttribute('src', './images/diceS6.png')
  }
  
  const randomNumber2 = Math.floor(Math.random()*6) + 1
   console.log(`Player 2: ${randomNumber2}`)
  
  if (randomNumber2 === 1) {
    document.querySelector('.img2').setAttribute('src', './images/diceS1.png')
  } else if (randomNumber2 === 2) {
    document.querySelector('.img2').setAttribute('src', './images/diceS2.png')
  } else if (randomNumber2 === 3) {
    document.querySelector('.img2').setAttribute('src', './images/diceS3.png')
  } else if (randomNumber2 === 4) {
    document.querySelector('.img2').setAttribute('src', './images/diceS4.png')
  } else if (randomNumber2 === 5) {
    document.querySelector('.img2').setAttribute('src', './images/diceS5.png')
  } else {
    document.querySelector('.img2').setAttribute('src', './images/diceS6.png')
  }

  if (randomNumber1 === randomNumber2) {
    document.querySelector('h2').innerHTML = "It's a tie...";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector('h2').innerHTML = "Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector('h2').innerHTML = "Player 2 wins!";
  }
}




