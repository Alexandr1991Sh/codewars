const numbers = [2, 3, 4, 1, 7, 6, 19];
const target = 10;

function findTwoNumbers(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return []
}

console.log(findTwoNumbers(numbers, target));   // [3,7]