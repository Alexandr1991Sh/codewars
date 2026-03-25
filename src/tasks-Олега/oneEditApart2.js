//Реализовать функцию oneEditApart, которая проверяет,
//можно ли привести одну строку к другой не более чем за одно
//исправление (удаление, добавление или изменение символа).

function oneEditApart(x, y) {
    if (Math.abs(x.length - y.length) > 1) return false

    if (x.length === y.length) {
        let difs = 0
        for (let i = 0; i < x.length; i++) {
            if (x[i] !== y[i]) {
                difs += 1
                if (difs > 1) return false
            }

        }
        return true
    }

    if (y.length - x.length === 1) {
        for (let i = 0; i < y.length; i++) {
            let tempY = y.slice(0, i) + y.slice(i + 1)
            if (x === tempY) return true
        }
    }

    if (y.length - x.length === 1) {

    }

    return false
}

//Tests
console.log(oneEditApart("cat", "dog")) // false
console.log(oneEditApart("cat", "cats")) // true
console.log(oneEditApart("cat", "cut")) // true
console.log(oneEditApart("cat", "cast")) // true
console.log(oneEditApart("cat", "at")) // true
console.log(oneEditApart("cat", "acts")) // false
console.log(oneEditApart("cat", "actss")) // false
