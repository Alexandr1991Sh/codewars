// Напишите аналог метода массива .flat(), который превращает многомерный массив в плоский, одномерный.

const flatten = (arr) => {
    const result = []

    arr.forEach(el => {
        Array.isArray(el) ? result.push(...flatten(el)) : result.push(el)
    })

    return result
};

console.log(flatten([1, 2, [3, 4], [[5, [6]]], 7, 8])); // [1,2,3,4,5,6,7,8]
