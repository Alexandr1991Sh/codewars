// console.log(1)
//
// setTimeout(() => console.log(2));
//
// new Promise(resolve => {
//     console.log(3);
//     resolve();
// }).then(() => {
//     console.log(4);
// });
//
// setTimeout(() => {
//     new Promise(resolve => {
//         console.log(5);
//         resolve();
//     }).then(() => console.log(6));
// });
//
// setTimeout(() => console.log(7));
//
// console.log(8)

// 1 3 8 4 2 5 6 7


new Promise(res => res())
    .then(() => {
        throw new Error('Ошибка')
        console.log(2)
    })
    .catch(err => {
        console.log(1)
        throw err
    })
    .then(() => console.log(3))
    .catch(() => console.log(4))
    .then(() => console.log(5))
    .catch(() => console.log(6))

// 1 4 5