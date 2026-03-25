// Преобразовать вложенный объект в flat-структуру
const tree = {
    a: {
        b: "two",
        c: {
            d: "one",
        },
    },
};

const treeFn = (obj, prefix = '') => {
    let result = {}

    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            Object.assign(result, treeFn(obj[key], `${prefix}${key}.`))
        } else {
            result[`${prefix}${key}`] = obj[key]
        }
    }
    return result
};

console.log(treeFn(tree));
//    {
//     'a.b': 'two',
//     'a.c.d': 'one'
//    }
