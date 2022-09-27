function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str.split('').forEach((letter) => {
    if (letter.charCodeAt(0) === currCharCode) {
      currCharCode++;
    } else {
      missing = String.fromCharCode(currCharCode);
    }
  });

  return missing;
}

fearNotLetter('abce'); // should return the string d.
fearNotLetter('abcdefghjklmno'); //should return the string i.
fearNotLetter('stvwx'); //hould return the string u.
