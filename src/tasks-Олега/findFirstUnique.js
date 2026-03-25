// Найти первый неповторяющийся элемент в массиве целых чисел
function findFirstUnique(arr) {
    const result = new Map()

    for (const el of arr) {
        if (!result.has(el)) {
            result.set(el, 1)
        } else {
            result.set(el, result.get(el) + 1)
        }
    }

    for (const el of arr) {
        if (result.get(el) === 1) return el
    }

    return null
}

// Tests
console.log(findFirstUnique([9, 4, 9, 6, 7, 4, 5])) // 6