// 11. Counting Sheeps
// source : https://www.codewars.com/kata/54edbc7200b811e956000556/train/typescript

export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  // your code here
  return arrayOfSheep.map(i => i).filter(i => i == true).length
}

console.log(countSheeps([true, false, true, true])) 