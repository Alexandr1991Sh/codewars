// 1. Написать статический метод isPromise(x) который возвращает true если x является экземпляром класса Promise
// 2. Написать метод массива check() который возвращает объект, где ключи это индексы а значения это значения массива

//TODO

Promise.isPromise = function (x) {
    return x instanceof Promise
}

Array.prototype.check = function () {
    let res = {}

    for (let i = 0; i < this.length; i++) {
        res[i] = this[i]
    }

    return res
}

//Tests
console.log(Promise.isPromise("")) //false
console.log(Promise.isPromise()) //false
console.log(Promise.isPromise(new Promise(r => {
}))) //true

console.log([1, 2, 3].check()) //{'0': 1, '1': 2, '2': 3}
console.log(['a', 'b', 'c'].check()) //{'0': 'a', '1': 'b', '2': 'c'}
console.log([].check()) //{}