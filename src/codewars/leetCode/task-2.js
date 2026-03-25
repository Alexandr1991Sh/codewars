function isValid(s) {
    const brackets = {')': '(', '}': '{', ']': '['};
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // Если символ — закрывающая скобка
        if (brackets.hasOwnProperty(char)) {
            // Проверяем соответствие с последней открывающей скобкой
            const lastOpen = stack.pop(); // достаем верхнюю скобку
            if (lastOpen !== brackets[char]) {
                return false; // скобки не совпадают
            }
        } else {
            // Если открывающая — добавляем в стек
            stack.push(char);
        }
    }

    // Если после обработки стек пустой — все скобки закрыты правильно
    return stack.length === 0;
}

console.log(isValid("()[]{}")) // true
console.log(isValid("([)]"))   // false