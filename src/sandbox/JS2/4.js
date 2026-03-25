// // пример гласных: a, i, o, e, u, y
// const findVowelsLength = str => {
//     const vowelsMap = {a: true, i: true, o: true, e: true, u: true, y: true}
//     let count = 0
//     const lowerString = str.toLowerCase()
//
//     for (let i = 0; i < lowerString.length; i++) {
//         if (vowelsMap[lowerString[i]]) {
//             count += 1
//         }
//     }
//
//     return count
// }
// console.log(findVowelsLength('akksja'))
// // expect(findVowelsLength('akksja')).toBe(2);

// пример гласных: a, i, o, e, u, y
const findVowelsLength = str => {
    const vowelsArray = ['a', 'i', 'o', 'e', ' u', 'y']
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (vowelsArray.includes(str[i].toLowerCase())) {
            count += 1
        }
    }

    return count
}
console.log(findVowelsLength('akksja'))
// expect(findVowelsLength('akksja')).toBe(2);