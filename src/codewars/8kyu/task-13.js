const positiveSum = arr => arr.reduce((acc, cur) => cur > 0 ? acc + cur : acc, 0)

console.log(positiveSum([1, -2, 3, 4, 5]))      // 13