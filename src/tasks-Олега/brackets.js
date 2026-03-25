//На вход подается строка, содержащая только символы скобок.
//Задача: проверить, является ли последовательность скобок валидной.
function isValidBrackets(str) {
    const stack = []
    const brackets = {')': '(', '}': '{', ']': '['}

    for (let char of str) {
        if ('({['.includes(char)) {
            stack.push(char)
        } else if (stack.pop() !== brackets[char]) return false
    }

    return stack.length === 0
}

//Tests
console.log(isValidBrackets("()")) //true
console.log(isValidBrackets("()[]{}")) //true
console.log(isValidBrackets("(]")) //false
console.log(isValidBrackets("([])")) //true
console.log(isValidBrackets("]")) //false
