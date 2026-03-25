// есть массив содержащий неупорядоченные числовой ряд 1 - 100 в котором не хватает одного случайного числа
//как найти недостающее число?

function getRandomNim(arr) {
    let res1 = 100 * 101 / 2
    let res2 = 0

    for (let i = 0; i < arr.length; i++) {
        res2 += arr[i]
    }
    
    return res1 - res2
}

//Test
const test = []
for (let i = 1; i < 101; i++) {
    if (i === 50) {
        continue
    }
    test.push(i)
}

const shuffled = test.sort(() => Math.random() - 0.5)
console.log(getRandomNim(shuffled))

