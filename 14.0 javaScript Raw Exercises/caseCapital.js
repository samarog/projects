
//   var name = prompt('What is your name?');
//   var a = name.slice(0,1);
//   a = a.toUpperCase();
//   var b = name.slice(1,name.length);
//   b = b.toLowerCase();
//   alert("Hello " + a+b)

// var username = prompt(`What's your name?`);
// var firstLetter = username.slice(0,1);
// var otherLetter = username.slice(1,username.length);
// firstLetter = firstLetter.toUpperCase();
// otherLetter = otherLetter.toLowerCase();
// console.log(`Welcome, ${firstLetter+otherLetter}.`);

var dogAge = prompt("What's your dog age?");
var humanAge = (dogAge - 2) * 4 + 21;
console.log(`Your dog is ${humanAge} years old in human age.`)