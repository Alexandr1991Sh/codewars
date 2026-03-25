const numbers = [2, 3, 4, 1, 7, 6, 19];
const target = 10;

// function findTwoNumbers(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
//     return []
// }


function findTwoNumbers(arr, target) {
    const seen = new Set()

    for (const num of arr) {
        const complement = target - num
        if (seen.has(complement)) {
            return [complement, num]
        }
        seen.add(num)
    }

    return []
}

console.log(findTwoNumbers(numbers, target)) // [3, 7]
