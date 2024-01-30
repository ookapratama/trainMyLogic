// 7 Reverse words
// source : https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

// function reverseWords(str) {
//   let result = str.split(" ");
// //   return result
//   const a = [];
//   for (let i = 0; i < result.length; i++) {
//     a.push(result[i].split("").reverse().join(""));
//   }
//   return a.join(" ");
// }
const reverseWords = str => str.split("").reverse().join("").split(" ").reverse().join(" ");

console.log(reverseWords("Ooka Tes Katak"));
