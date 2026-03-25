function billboard(name, price = 30) {
    let res = 0
    for (let i = 0; i < name.length; i++) res += price
    return res
}

console.log(billboard(("Jeong-Ho Aristotelis")))        // 600
console.log(billboard("Abishai Charalampos"))           // 570
console.log(billboard("Hadufuns John", 20))       // 260
console.log(billboard("Werner Vígi", 15))         // 165