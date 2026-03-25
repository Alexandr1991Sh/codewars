// Напишите функцию memo, которая принимает функцию и мемоизирует ее.
// То есть если мы вызываем мемоизированную функцию с одними и теми же аргументами несколько раз,
// она берет значение из кеша

const memo = (fn) => {
    const cache = new Map()
    return (...args) => {
        const key = JSON.stringify(args)
        if (cache.has(key)) {
            console.log('обращение к cache')
            return cache.get(key)
        } else {
            console.log('вызов count')
            const result = fn(...args)
            cache.set(key, result)
            return result
        }
    }
}

const count = (a, b) => {
    return a + b;
};

const memoCount = memo(count);

console.log(memoCount(1, 2)); // 3 (вызов count)
console.log(memoCount(3, 1)); // 4 (вызов count)
console.log(memoCount(1, 2)); // 3 (обращение к cache)
