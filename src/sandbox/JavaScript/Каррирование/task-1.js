// Каррирование с двумя значениями
const sum = (val1, val2) => {
    if(val2 !== undefined) return val1 + val2
    return  (num) => val1 + num;
};

sum(1, 2);
sum(1)(2);

console.log(sum(1, 2)); // 3
console.log(sum(1)(2)); // 3
