// Написать функцию которая вернет те значения из первого массива,
// которых нету во втором массиве

const longArr1 = [1, 4, 3, 2];
const longArr2 = [1, 2];

const func = (longArr1, longArr2) => {
    return longArr1.filter(el => !longArr2.includes(el));
};

console.log(func(longArr1, longArr2)); // вернуть [4,3]
