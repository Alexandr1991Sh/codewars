// Реализовать метод eval при условии что в выражении гарантированно будут числа а
// между ними только сложение и умножение, например "2+3*22*7+3"

function myCustomEval(str) {
    return str.split('+').reduce((acc, cur) => {

        const value = cur.split('*').reduce((acc2, cur2) => {
            return acc2 * Number(cur2)
        }, 1)

        return acc + value
    }, 0)
}

//Tests
console.log(myCustomEval('2+2*2') == 2 + 2 * 2)//true
console.log(myCustomEval('0') == 0)//true
console.log(myCustomEval('2+2*2') == 2 * 2 * 2)//false
console.log(myCustomEval('2*2*2') == 2 * 2 * 2)//true
console.log(myCustomEval('2+2+2') == 2 + 2 + 2)//true