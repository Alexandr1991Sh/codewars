export {}
// Есть объект X с произвольными ключами и значениями.
// Типизировать функцию getProperty таким образом, чтобы TypeScript проверял,
// что переданный ключ (key) существует в объекте obj. Если ключ не существует
// в объекте, TypeScript должен выдавать ошибку на этапе компиляции.

// const x = {a: 1, b: 2, c: 3, d: 4}
//
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key]
// }
//
// getProperty(x, 'a')
// getProperty(x, 'm')