// Результат - строка из сконкотенированных value элементов, расположенных в обратном порядке букв,
// в порядке возрастания order, не содержит одинаковых букв, не содержит expired элементов
const input = [
    {value: "abcd", order: 4, expired: false},
    {value: "qwer", order: 2, expired: true},
    {value: "xyz1", order: 1, expired: false},
    {value: "abx2", order: 3, expired: false},
];

const getConcated = (arr) => {
    const filteredAndSortedValues = arr
        .filter(el => !el.expired)
        .sort((a, b) => a.order - b.order)
        .map(el => el.value.split('').reverse().join('')).join('')
    const uniqueChars = [...new Set(filteredAndSortedValues)];
    return uniqueChars.join('');
}

console.log(getConcated(input)) // 1zyx2badc

// const getConcated = (arr) => {
//     const nonExpiredAndSorted = arr.filter(el => el.expired === false).sort((a, b) => a.order - b.order)
//     const reversedValue = nonExpiredAndSorted.map(el => el.value.split('').reverse().join(''))
//     const concatenated = reversedValue.map(el => el).join('')
//     const uniqueChars = [...new Set(concatenated)];
//     return uniqueChars.join('');
// }
