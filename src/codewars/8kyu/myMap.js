Array.prototype.myMap = function (cb) {
    const res = []

    for (let i = 0; i < this.length; i++) {
        res.push(cb(this[i], i, this))
    }

    return res
}

const array = [1, 2, 3, 4]

console.log(array.myMap(el => el * 2))
console.log(array)