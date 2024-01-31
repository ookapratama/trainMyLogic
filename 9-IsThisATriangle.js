// 9 Is this a triangle? pertidaksamaan segitiga
// source : https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

const isTriangle = (x, y, z) => {
  if (Math.min(x, y, z) > 0) {
    if (x + y > z && x + z > y && z + y > x) return true;
  }
  return false;
};

// const isTriangle = (a,b,c) => (Math.min(a,b,c) && a + b > c && b + c > a && c + a > b) > 0

console.log(isTriangle(4, 8, 5));
