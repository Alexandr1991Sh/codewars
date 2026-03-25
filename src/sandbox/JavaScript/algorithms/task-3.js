// Реализовать функцию проверку на анаграммы
function isAnagram(first, second) {
 if (first.length !== second.length) return false

 const sort1 = first.toLowerCase().split('').sort().join('')
 const sort2 = second.toLowerCase().split('').sort().join('')

 return sort1 === sort2
}

isAnagram("finder", "friend"); // true
isAnagram("test", "sets"); // false
isAnagram("abc", "aaa"); // false
isAnagram("abb", "aab"); // false
