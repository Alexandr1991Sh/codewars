const array = [1, 2, 4, 6, 7, 9, 12]

Array.prototype.myFilter = function (callback, thisArg) {
    const result = []
    const thisArray = this

    for (let i = 0; i < thisArray.length; i++) {
        if (i in thisArray) {
            const element = thisArray[i]
            if (callback.call(thisArg, element, i, thisArray)) {
                result.push(element)
            }
        }
    }

    return result
}

console.log(array.myFilter((el, i, arr) => el !== 1))
