Array.prototype.myMap = function (cb) {
    let res = []

    for (let i = 0; i < this.length; i++) {
        res.push(cb(this[i], i, this))
    }

    return res
}

console.log([1, 2, 3, 4, 5].myMap(el => el * 2))

Array.prototype.myFilter = function (cb) {
    let res = []

    for (let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            res.push(this[i])
        }
    }

    return res
}

console.log([1, 2, 3, 4, 5].myFilter(el => el < 3))
