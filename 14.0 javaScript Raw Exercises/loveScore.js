var nameOne = prompt(`Enter your name:`);
console.log('You are ' + nameOne);
var nameTwo = prompt(`Enter your crush name:`);
console.log('Your crush is ' + nameTwo);

var matchScore = Math.random();
matchScore = Math.floor(matchScore*100);
console.log (matchScore);

alert(`${nameOne} and ${nameTwo} have a love score of ${matchScore}%.`)