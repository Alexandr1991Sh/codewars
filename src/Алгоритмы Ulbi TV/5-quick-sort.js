const array = [0, 7, 6, 4, 2, 1, 12, 45, 78, -1, 67, -5, 234, -12]

let count = 0

const quickSort = (array) => {
    if (array.length <= 1) return array
    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (i === pivotIndex) continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(array))
console.log(array.length)
console.log('count=', count)

