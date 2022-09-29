function smallestCommons(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let multy = 1;
  const range = Array(max - min + 1)
    .fill()
    .map((_, i) => i + min);

  for (let i = min; i <= max; i++) {
    multy *= i;
  }
  for (let j = max; j <= multy; j += max) {
    const common = range.every((value) => j % value === 0);
    if (common) {
      return j;
    }
  }
}
console.log(
  smallestCommons([1, 5]), // should return 60.
  smallestCommons([2, 10]), // should return 2520.
  smallestCommons([1, 13]) //should return 360360.
);
