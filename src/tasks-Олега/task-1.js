// Манипулятор находится в исходной точке и умеет перемещаться
// вперед, назад, вправо, влево
// На вход манипулятора подаётся случайная строка, содержащая односивольные токены-команды.
// Манипулятор последовательно обрабатывает токены, выполняя соответствующие им команды. После обработки всех токенов
// манипулятор останавливается.
// Манипулятор поддерживает 4 варианта токенов 'U' 'D' 'R' 'L' соответствующих направлениям перемещения.
// Внутри строки токены не разделены.
// Написать функцию, получающую на вход строку токенов и определяющую находится ли манипулятор в исходной точке после остановки.

function isAtOrigin(movements) {
    const up = []
    const down = []
    const right = []
    const left = []

    if (movements === '') return true

    for (let i = 0; i < movements.length; i++) {
        if (movements[i] === 'U') {
            up.push(movements[i])
        } else if (movements[i] === 'D') {
            down.push(movements[i])
        } else if (movements[i] === 'R') {
            right.push(movements[i])
        } else if (movements[i] === 'L') {
            left.push(movements[i])
        }
    }

    return up.length === down.length && left.length === right.length
}

// Tests
console.log(isAtOrigin("UD")); // true
console.log(isAtOrigin("LL")); // false
console.log(isAtOrigin("UUDDLRLR")); // true
console.log(isAtOrigin("UUDDLRLRLL")); // false
console.log(isAtOrigin("")); // true