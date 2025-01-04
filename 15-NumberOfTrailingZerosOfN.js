//  15 Number of trailing zeros of N!
//  source : https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript


function zeros(n, v = 1) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        v = i * v;
        arr.push(v)
        let split = (""+arr).split('');
        console.log(split.map(x => x).reverse())
    }

    return n == 0 ? n : v;
    // return n == 0 ? n : zeros(v * n);
}
console.log(zeros(6))
