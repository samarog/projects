
// Basic structure of Fizz

let game = [];

count();

console.log(game);



function count() {
  for (let x = 1; x <= 100; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
      game.push("FizzBuzz");
    }

    else if (x % 3 === 0) {
      game.push("Fizz");
    }

    else if (x % 5 === 0) {
      game.push("Buzz");
    }

    else {
      game.push(x);
    }
  }
}

// const animals = ["pigs", "goats", "sheep"];
// const count = animals.push("cows");