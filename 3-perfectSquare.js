// 3 Find the next perfect square!
// Source : https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

// function findNextSquare(sq) {
//   let result = Math.sqrt(sq);
//   if (Number.isInteger(result)) return Math.pow(result + 1, 2);
//   return -1;
// }

// function findNextSquare(sq) {
//   let result = Math.sqrt(sq);
//   return Number.isInteger(result) ? Math.pow(result + 1, 2) : -1;
// }

const findNextSquare = (sq) => 
  Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;

console.log(findNextSquare(625));
