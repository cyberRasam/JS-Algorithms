/*
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/

function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
console.log(
  telephoneCheck('555-555-5555'),
  telephoneCheck('(555)555-5555'),
  telephoneCheck('1 555)555-5555'),
  telephoneCheck('1 555 555 5555'),
  telephoneCheck('123**&!!asdf#'),
  telephoneCheck('55555555'),
  telephoneCheck('(6054756961)'),
  telephoneCheck('2 (757) 622-7382')
);
