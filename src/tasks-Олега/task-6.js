//Напишите функцию equals(obj1, obj2) которая возвращает true
//если все примитивные свойства obj1 совпадают с примитивными свойствами obj2

function equals(obj1, obj2) {
    const obsValues1 = Object.values(obj1).sort()
    const obsValues2 = Object.values(obj2).sort()

    const objKeys1 = Object.keys(obj1).sort()
    const objKeys2 = Object.keys(obj2).sort()

    return obsValues1 === obsValues2 && objKeys1 === objKeys2
}

//Тесты
let obj1 = {a: 1, b: 2};
let obj2 = {b: 2, a: 1};
console.log(equals(obj1, obj2))//true

// let obj1 = {a: 1};
// let obj2 = {b: 2, a: 1};
// console.log(equals(obj1, obj2))//false