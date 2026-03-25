Array.prototype.myFilter = function (func) {
    const result = []

    for (let i = 0; i < this.length; ++i) {
        if (func(this[i])) {
            result.push(this[i])
        }
    }

    return result
}

const array = [1, 2, 3, 4]

console.log(array.myFilter(num => num > 3))       // [4]
console.log(array)

