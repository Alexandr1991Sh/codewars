// Реализуйте функцию customPromiseAll(promises), которая работает
// подобно Promise.all().
// Функция должна принимать массив промисов и возвращать промис,
// который разрешается массивом результатов исходных промисов.

function customPromiseAll(promises) {
    const result = []
    let count = 0
    return new Promise((resolve, reject) => {
        promises.forEach((pr, idX) => {
            pr.then(res => {
                result[idX] = res
                count += 1
                if (count === promises.length) resolve(result)
            }).catch(reject)
        })
    })
}

// Пример использования
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

customPromiseAll([promise1, promise2, promise3])
    .then((results) => console.log(results)) // [1, 2, 3]
    .catch((error) => console.error(error));
