var nameOne = prompt("What's your name?");
n1FirstLetter = nameOne.slice(0,1);
n1FirstLetter = n1FirstLetter.toUpperCase();
n1OtherLetter = nameOne.slice(1,nameOne.length);
n1OtherLetter.toLowerCase();
nameOne = n1FirstLetter + n1OtherLetter;
var nameTwo = prompt("What's your crush's name?")
n2FirstLetter = nameTwo.slice(0,1);
n2FirstLetter = n2FirstLetter.toUpperCase();
n2OtherLetter = nameTwo.slice(1,nameTwo.length);
n2OtherLetter = n2OtherLetter.toLowerCase();
nameTwo = n2FirstLetter + n2OtherLetter;

function loveMeter (nameOne, nameTwo) {

var loveMatch = Math.floor (Math.random()*100) + 1;

if (loveMatch < 30)  {
    return `Your lovemeter says: ${loveMatch}%. Nah, ${nameOne} and ${nameTwo} won't have much of a future...`
}

else if (loveMatch < 70) {
    return `Your lovemeter says: ${loveMatch}%. Not great, not terrible. ${nameOne} and ${nameTwo} might work out.`
}

else if (loveMatch >= 70) {
    return `Your lovemeter says: ${loveMatch}%. ${nameOne} and ${nameTwo} are the essence of true love!`
}

    
}

var output = loveMeter(nameOne, nameTwo);
alert(output);
