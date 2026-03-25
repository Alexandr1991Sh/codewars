// Анаграмма - это слово, образованное путём перестановки букв, составляющих другое слово
// Дан массив строк, необходимо вернуть массив с массивами анаграмм, которые встречаются в массиве строк более 1 раза

const process = words => {
    const groups = {}

    for (const word of words) {
        const sortedKeys = word.split('').sort().join('')

        if (!groups[sortedKeys]) {
            groups[sortedKeys] = []
        } else {
            groups[sortedKeys].push(word)
        }
    }

    return Object.values(groups).filter(word => word.length > 1)
}

console.log(process(['xyz', 'abc', 'bca', 'zyx', 'klm', 'cab', 'zxy', 'xzy'])) // [['xyz', 'zyx', 'zxy', 'xzy'], ['bca', 'cab']]