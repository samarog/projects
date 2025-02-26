var dice = Math.floor (6 * Math.random()) + 1;
console.log(dice)

var dice2 = Math.random();
dice2 = dice2 * 6;
dice2 = Math.floor(dice2) + 1;
console.log(dice2);

const result = dice + dice2;
const resultScore = result > 7 ? "You win" : "You lose";
console.log(resultScore);
