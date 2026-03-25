// Анаграмма - это слово, образованное путём перестановки букв, составляющих другое слово
// Дан массив строк, необходимо вернуть массив с массивами анаграмм, которые встречаются в массиве строк более 1 раза
// process(['xyz', 'abc', 'bca', 'zyx', 'klm', 'cab', 'zxy', 'xzy']) // [['xyz', 'zyx', 'zxy', 'xzy'], ['abc', 'bca', 'cab']]

function findAnagrams(arr) {
    const groups = {};

    arr.forEach(word => {
        // Сортируем буквы в слове, чтобы создать ключ для группы
        // const sorted = word.split('').sort().join('');
        const sorted = word.split('').sort().join('');

        if (!groups[sorted]) {
            groups[sorted] = [];
        }
        groups[sorted].push(word);
    });

    // Фильтруем группы, оставляя только те, где больше 1 слова
    return Object.values(groups).filter(group => group.length > 1);
}

console.log(findAnagrams(['xyz', 'abc', 'bca', 'zyx', 'klm', 'cab', 'zxy', 'xzy']))
