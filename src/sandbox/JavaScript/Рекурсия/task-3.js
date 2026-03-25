// просуммировать все value
const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [{ value: 4 }, { value: 5 }],
        },
        {
            value: 3,
            children: [{ value: 6 }, { value: 7 }],
        },
    ],
};

const getTreeVal = (obj) => {
    return Object.entries(obj).reduce((acc, cur) => {
        const [key, val] = cur;

        if (Array.isArray(val)) {
            val.forEach((el) => (acc += getTreeVal(el)));
        } else {
            acc += val;
        }

        return acc;
    }, 0);
};

console.log(getTreeVal(tree), "tree-val"); //28
