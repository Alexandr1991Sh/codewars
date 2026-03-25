// n < 5	100
// n >= 5 и n < 10	95
// n >= 10	90

function saleHotdogs(n) {
    return n * (n < 5 ? 100 : n < 10 ? 90 : 90)
}

console.log(saleHotdogs(1))      // 100
console.log(saleHotdogs(4))      // 400
console.log(saleHotdogs(5))      // 475
console.log(saleHotdogs(9))      // 855
console.log(saleHotdogs(10))     // 900
console.log(saleHotdogs(100))    // 9000