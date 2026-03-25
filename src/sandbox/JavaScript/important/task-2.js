// 1. Вернуть объект с ключами type из масива,
// значение - массив элементов с таким type

// 2. Вернуть объект с ключами type, а значение - объект
// вида {count: количество, weight: суммарный вес}

const arr = [
    {type: "banana", weight: 32},
    {type: "apple", weight: 24},
    {type: "kiwi", weight: 55},
    {type: "banana", weight: 44},
    {type: "orange", weight: 5},
];

const groupByType = (arr) => {
    const result = {}

    arr.forEach((etem) => {
        const {type, ...rest} = etem

        if (result[type]) {
            result[type].push(rest)
        }else {
            result[type] = [rest]
        }

    })

    return result
};

console.log(groupByType(arr));

