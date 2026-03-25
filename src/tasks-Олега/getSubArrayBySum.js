// На вход дается массив целых чисел и число х. Найти под-отрезок (любой), сумма элементов
// которого равняется х. Вывести границы этого отрезка или пустой массив если это невозможно.
function getSubArrayBySum(arr, x) {

    return []

}

// Тест кейс:
console.log(getSubArrayBySum([5, 2, 1, 1, 4], 4)); // [1, 3]
console.log(getSubArrayBySum([4, 2, 1, 1, 4], 4)); // [0, 0]
console.log(getSubArrayBySum([3, 3, 3, 3, 3], 4)); // []
console.log(getSubArrayBySum([5, 5, 5, 5, 5], 4)); // []
console.log(getSubArrayBySum([3, 3, 4, 3, 3], 4)); // [2, 2]
