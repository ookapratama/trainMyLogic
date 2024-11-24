// 14 Sum of Digits / Digital Root
// source : https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digitalRoot(n) {
    console.log(n);
    let v = n.toString().split("");
    let mapV = v.map((i) => parseInt(i));
    let reduceV = mapV.reduce((acc, current) => acc + current, 0);
    return reduceV >= 10 ? digitalRoot(reduceV) : reduceV;

    let reduce = n.toString().split("").map((i) => parseInt(i)).reduce((acc, current) => acc + current, 0)
    return n >= 10 ? digitalRoot(reduce)
        : reduce

    // test from forum
    return (n - 1) % 9 + 1;

}

console.log(digitalRoot(12388458))