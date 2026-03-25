// Рекурсивно просуммировать все цифры
const obj = {
    a: 1,
    b: {
        c: 3,
        d: -10,
        e: {
            f: {
                g: 1,
            },
        },
    },
};

function sum(obj) {
    let result = 0

    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            result += obj[key]
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            result += sum(obj[key])
        }
    }

    return result
}

console.log(sum(obj))