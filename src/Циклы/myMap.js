const array = [1, 2, 4, 6, 7, 9, 12]

Array.prototype.myMap = function (callback) {
    const result = []
    const thisArray = this

    for (let i = 0; i < thisArray.length; i++) {
        result.push(callback(thisArray[i], i, thisArray))
    }

    return result

}


console.log(array.myMap((el, i, arr) => el === 2 ? '///' : el))
console.log(array)
