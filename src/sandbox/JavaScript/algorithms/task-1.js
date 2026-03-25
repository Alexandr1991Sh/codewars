// Объединить отсортированные массивы, чтобы из двух массивов получился один со всеми данными - отсортированными по возрастанию
// По условию 2 массива и a и b - всегда отсортированны изначально по возрастанию
const a = [1, 3, 5];
const b = [2, 4, 6, 7];

const sortArrays = (a, b) => {
    const result = []
    let i = 0
    let j = 0

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            result.push(a[i])
            i++
        } else {
            result.push(b[j])
            j++
        }
    }

    while (i < a.length) {
        result.push(a[i])
        i++
    }
    while (j < b.length) {
        result.push(b[j])
        j++
    }
    return result;
};

console.log(sortArrays(a, b));
