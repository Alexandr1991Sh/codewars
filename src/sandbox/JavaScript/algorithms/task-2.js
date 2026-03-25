// Найти индексы элементов, которые в сумме дают target

/*
Пример:
    Дано: nums = [1, 16, 34, 76], target = 77
    Ответ: [0, 3]
    Объяснение: Сумма чисел nums[0] + nums[3] == 77, в ответе мы возвращаем их индексы, записанные в массив: [0, 3].
*/

function twoSum(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i]
        if(map.has(compliment)) {
            return [map.get(compliment),i]
        }
        map.set(nums[i],i)
    }
    return []
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
