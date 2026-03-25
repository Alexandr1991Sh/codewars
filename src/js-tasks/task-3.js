// реализовать метод eval при условии что в выражении будет число и между ними только сложение и умножение
// например: "2+3*22*7+3"

function myCustomEval(str) {

    return str.split('+').reduce((acc, part) => {
        const productPart = part.split('*').map(Number)
        const product = productPart.reduce((mullAcc, num) => mullAcc * num, 1)
        return acc + product
    }, 0)

}


//Test
console.log(myCustomEval('2+2*2') == 2 + 2 * 2)     // true
console.log(myCustomEval('0') == 0)                 // true
console.log(myCustomEval('2+2*2') == 2 * 2 * 2)     // false
console.log(myCustomEval('2+2+2') == 2 + 2 + 2)     // true