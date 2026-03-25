function padIt(str, n) {
    let i = 0
    while (i < n) {
        if (i % 2 === 0) {
            str = '*' + str
        } else {
            str = str + '*'
        }
        i++
    }
    return str
}

console.log(padIt("a", 1))       //"*a"
console.log(padIt("a", 2))       //"*a*"
console.log(padIt("a", 3))       //"**a*"
console.log(padIt("a", 4))       //"**a**"
console.log(padIt("a", 5))       //"***a**"