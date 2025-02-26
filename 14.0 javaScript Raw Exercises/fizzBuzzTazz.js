let game = [];
x = 1;


for (x = 1; x <= 50; x++) {

if (x % 3 === 0 && x % 5 === 0 && x % 7 === 0) {
  game.push("FizzBuzzTazz");
}

else if (x % 3 === 0 && x % 5 === 0 && x % 7 !== 0) {
  game.push(`FizzBuzz`);
}

else if (x % 5 === 0 && x % 7 === 0 && x % 3 !== 0) {
  game.push(`BuzzTazz`);
}

else if (x % 3 === 0 && x % 7 === 0 && x % 5 !== 0) {
  game.push(`FizzTazz`);
}

else if (x % 3 === 0) {
  game.push("Fizz");
}

else if (x % 5 === 0) {
  game.push("Buzz")
}

else if (x % 7 === 0) {
  game.push("Tazz")
}

else {
  game.push(x)
}
}

console.log(game);