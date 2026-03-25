const array = [0, 7, 6, 4, 2, 1, 12, 45, 78, -1, 67, -5, 234, -12,]

let count = 0

const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
            count += 1
        }
    }
    return array
}

console.log(bubbleSort(array))
console.log(array.length)
console.log('count=', count)