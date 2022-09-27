/* Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant 
cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end. */

function translatePigLatin(str) {
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  if (str[0].match(regex)) {
    pigLatin = str + 'way';
  } else if (str.match(regex) === null) {
    pigLatin = str + 'ay';
  } else {
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

translatePigLatin('consonant');
