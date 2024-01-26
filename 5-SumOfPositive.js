// 5 Sum of positive
// Source : https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// function positiveSum(arr) {
//   return arr.length !== 0
//     ? arr
//         .map((item) => item)
//         .filter((item) => item > 0)
//         .reduce((total, currentVal) => total + currentVal, 0)
//     : 0;
// }

// function positiveSum(arr) {
//   return arr
//         .map((item) => item)
//         .filter((item) => item > 0)
//         .reduce((total, currentVal) => total + currentVal, 0);
// }

const positiveSum = (arr) =>
  arr
    .filter((item) => item > 0)
    .reduce((total, nilaiSekarang) => total + nilaiSekarang, 0);

console.log(positiveSum([-1,5,0]));
