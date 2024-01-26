// 6 Pirates!! Are the Cannons ready!??
// source : https://www.codewars.com/kata/5748a883eb737cab000022a6/train/javascript

const cannonsReady = (gunners) => {
  return Object.values(gunners).some((item) => item === "nay") ? "Shiver me timbers!" : "Fire!" ;
};

console.log(cannonsReady({ 1: "aye", 2: "nay", 3: "nay" }));
