// 12 Square(n) Sum
// source : https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript


// function squareSum(numbers){
//   return numbers.reduce((total, value) => (value**2 + total),0)
// }

const squareSum = numbers => numbers.reduce((total, value) => (value**2 + total), 0)

console.log(squareSum([12]))