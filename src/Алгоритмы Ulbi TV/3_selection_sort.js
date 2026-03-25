const array = [0, 7, 6, 4, 2, 1, 12, 45, 78]

let count = 0

const selectinSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i + 1; j < array.length; j++) {
            count += 1
            if (array[i] < array[indexMin]) {
                indexMin = j
            }
        }
        let temp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = temp
    }
    return array
}

console.log(selectinSort(array))
console.log(array.length)
console.log('count=', count)