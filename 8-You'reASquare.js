// 8 You're a square!
// source : https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

// var isSquare = function (n) {
//   return Number.isInteger(Math.sqrt(n))
// };

// const isSquare = n => Number.isInteger(Math.sqrt(n))

// const isSquare = n => Math.sqrt(n) % 1 == 0 ? true : false

const isSquare = n => Math.sqrt(n) % 1 == 0 

console.log(isSquare(9))