const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
    const res = []

    for (let i = 0; i < this.length; i++) {
        res.push(cb(this[i], i, this))
    }

    return res
}

console.log('array1 myMap', array1.myMap(el => el * 2));
console.log('array1', array1);

Array.prototype.myFilter = function (cb) {
    const res = []

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            res.push(this[i])
        }
    }

    return res
}

console.log('array2 myFilter', array2.myFilter(el => el > 2))
console.log('array2', array2)