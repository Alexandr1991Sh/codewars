const isDigit = s => s.trim() !== '' && !isNaN(+s)

console.log(isDigit("s2324"))       // false
console.log(isDigit("-234.4"))      // true
console.log(isDigit("4"))           // true