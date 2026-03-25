// Получив массив строк strs, сгруппируйте анаграммы вместе. Вы можете вернуть ответ в любом порядке.
// Анаграмма - это слово или фраза, образованные путем перестановки букв другого слова или фразы. tea => eat

const groupAnagrams = (arr) => {
    const map = {}

    arr.forEach(word => {
            const sorted = word.split('').sort().join('')
            if (!map[sorted]) map[sorted] = []
            map[sorted].push(word)
        }
    )

    return Object.values(map)
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
