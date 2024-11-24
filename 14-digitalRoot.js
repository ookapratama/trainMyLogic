// 14 Sum of Digits / Digital Root
// source : https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digitalRoot(n) {
    // console.log(n);
    // let v = n.toString().split("");
    // let mapV = v.map((i) => parseInt(i));
    // let reduceV = mapV.reduce((acc, current) => acc + current, 0);
    // return reduceV >= 10 ? digitalRoot(reduceV) : reduceV;
    let reduce = n.toString().split("").map((i) => parseInt(i)).reduce((acc, current) => acc + current, 0)
    return n >= 10 ? digitalRoot(reduce)
        : reduce

}

console.log(digitalRoot(1234567))