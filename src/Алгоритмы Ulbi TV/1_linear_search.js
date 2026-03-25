const array = [1, 2, 5, 7, 6, 3, 8, 9, 11]

let count = 0

const linearSearch = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === item) return i
    }
    return null
}

console.log(linearSearch(array, 8))
console.log('count=', count)



