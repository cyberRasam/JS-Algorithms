function convertToRoman(num) {
  let converted = '';
  const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNums = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];

  for (let i = 0; i < decimals.length; i++) {
    while (decimals[i] <= num) {
      converted += romanNums[i];
      num -= decimals[i];
    }
  }
  return converted;
}

console.log(
  convertToRoman(36),
  convertToRoman(3),
  convertToRoman(16),
  convertToRoman(44)
);
