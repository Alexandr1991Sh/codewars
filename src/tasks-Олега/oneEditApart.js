//Реализовать функцию oneEditApart, которая проверяет,
//можно ли привести одну строку к другой не более чем за одно
//исправление (удаление, добавление или изменение символа).

function oneEditApart(x, y) {  // no usages
    // if (Math.abs(y.length - x.length) > 1) return false
    if (y.length - x.length > 1) return false

    if (x.length === y.length) {
        let diff = 0
        for (let i = 0; i < x.length; i++) {
            if (x[i] !== y[i]) diff++
        }
        return diff <= 1
    }

    if (y.length - x.length === 1) {
        for (let i = 0; i < y.length; i++) {
            let newY = y.replace(y[i], '')
            // let newY = y.slice(i, 1)
            if (newY === x) return true
        }

        return false
    }

    return true
}

//Tests
console.log(oneEditApart("cat", "dog")) // false
console.log(oneEditApart("cat", "cats")) // true
console.log(oneEditApart("cat", "cut")) // true
console.log(oneEditApart("cat", "cast")) // true
console.log(oneEditApart("cat", "at")) // true
console.log(oneEditApart("cat", "acts")) // false
