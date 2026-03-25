/**  Условие задачи:
 Напишите функцию checkBrackets(str), которая принимает строку содержащую скобки трех видов: (), {}, [].
 Функция должна вернуть true, если скобки в строке закрыты и вложены корректно, и false в противном случае.
 */

// Стартовый код:

function checkBrackets(str) {
    const brackets = {'}': '{', ']': '[', ')': '('}
    const stack = []


}

// Примеры использования
console.log(checkBrackets("{Hi(good day)!}")); // true
console.log(checkBrackets("{nice[day}")); // false
console.log(checkBrackets("(delicious[food])")); // true
