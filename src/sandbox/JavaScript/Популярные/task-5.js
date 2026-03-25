// Проверить, что все скобкки в строке валидны

const checkBrackets = (str) => {
    const mapa = {'(': ')', '{': '}', '[': ']'}
    const stack = []

    for (let i = 0; i < str.length; i++) {
        const cur = str[i]
        if (mapa[cur]) {
            stack.push(mapa[cur])
        } else if (stack.pop() !== cur) {
            return false;
        }
    }
    return !stack.length
};

console.log(checkBrackets("[[((]]))"));
console.log(checkBrackets("[)"));
console.log(checkBrackets("))[[()()]]"));
console.log(checkBrackets("[[]](((([[]]))))"));
console.log(checkBrackets("[]"));
