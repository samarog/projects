// As a simple code:

const text = "The quick brown fox jumps over the lazy dog. It barked.";
const vowel = /[aeiou]/gi;
const found = text.match(vowel);

console.log(found);
console.log(found.length);

// As a function:

function getVowels (txt) {
  // y = the word which you will parse looking for vowels
  const x = [/aeiou/gi]; // NOT REALLY needed this time
  let output = txt.match(x) //  "[aeiou]" tells the replace function to look for any of these characters and "gi" are flags. the "g" flag tells the function to look for match over the entire string (will otherwise break at the first match), and the "i" flag tells it to match case insensitively. So, it would also match, A , E and so on. Atenão que o output precisa de txt /// O MÉTODO .match() só pode ser usado com regular expressions como [/aeiou/gi]. Como uma array normal, não funciona.

  if (output === null) {
    return "There are no vowels in " + txt
  }

  else {
    return output
  }
}

// Para correr a função não esquecer que é string: getVowels ("qualquercoisa");