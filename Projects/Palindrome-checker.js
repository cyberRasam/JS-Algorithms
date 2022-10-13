function palindrome(str) {
  return (
    str.replace(/[\W_]/g, '').toLowerCase() ===
    str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('')
  );
}
console.log(
  palindrome('eye'), //should return true
  palindrome('race car'), //should return true
  palindrome('not a palindrome'), //should return false
  palindrome('A man, a plan, a canal. Panama') //should return true
);
