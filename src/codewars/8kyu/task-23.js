const doubleChar = str => str.split('').map(char => char + char).join('')


console.log(doubleChar("abcd"))         //"aabbccdd"
console.log(doubleChar("Adidas"))       //"AAddiiddaass"
console.log(doubleChar("1337"))         //"11333377"