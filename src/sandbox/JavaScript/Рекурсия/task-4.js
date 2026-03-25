// исходный объект, который нужно скопировать
// значение "a" может быть массивом, объектом или примитивом
// вложенность "а" может быть бесконечной
const a = [
    {
        name: "6x45",
        draw: {
            cost: 50,
            multiDraws: [1, 2, 3],
        },
        count: null,
    },
    {
        name: "7x49",
        draw: {
            cost: 75,
            multiDraws: [{c: 13}, 5, 6],
        },
        count: 10,
    },
];

const b = copy(a);

function copy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj
    }
    if (Array.isArray(obj)) {
        return obj.map(copy)
    }

    const result = {}

    for (let key in obj) {
        result[key] = copy(obj[key])
    }
    return result
}

// ниже проверка, что объект "а" действительно был скопирован в новый объект
if (b) b[1].draw.multiDraws[0].c = "369";
console.log(" ORIG: ", JSON.stringify(a), "\n\n", "COPY: ", JSON.stringify(b));


