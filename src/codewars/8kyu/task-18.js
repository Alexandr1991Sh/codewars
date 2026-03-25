function countWords(str) {
    if (str.trim() === '') return 0
    return str.trim().split(' ').filter(el => el !== '').length
}

console.log(countWords('Hello'))             //1
console.log(countWords('Hello, World!'))     // 2
console.log(countWords('Dear   Victoria, I love  to press   space button.'))     // 8
console.log(countWords('   '))     // 0
