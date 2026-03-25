import React from "react";
//Есть массив содержащий неупорядоченный числовой ряд 1 - 100 в котором не хватает одного случайного числа.
//Как найти недостающее число?
function getRandomNum(arr: number[]): number {
    const sumNum = 100 * 101 / 2
    const sumArr = arr.reduce((acc, cur) => acc + cur, 0)
    return sumNum - sumArr
}

//Tests
const test: any[] = []
for (let i: number = 1; i < 101; i++) {
    if (i === 50) {
        continue
    }
    test.push(i)
}

const shuffled: any[] = test.sort(() => Math.random() - 0.5);
console.log(getRandomNum(shuffled));