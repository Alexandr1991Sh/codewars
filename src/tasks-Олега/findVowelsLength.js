// пример гласных: a, i, o, e, u, y
const findVowelsLength = str => [...str.toLowerCase()].filter(el => 'aioeuy'.includes(el)).length


// expect(findVowelsLength('akksja')).toBe(2);
console.log(findVowelsLength('akksja'))