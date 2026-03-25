import React from "react";

const p1: Promise<unknown> = new Promise((resolve, reject) => {
    throw new Error('Uh oh!');
});

const p2: Promise<unknown> = new Promise((resolve, reject) => {
    resolve('p2 ok');
});

Promise.allSettled([p1, p2])
    .catch(error => {
        console.log('My error' + error);
    })
    .then(result => {
        console.log(((result as any)[1]).status);
    });

// пример - сразу фильтруем наш вывод
Promise.allSettled([p1, p2]).then((result) => {
    result.forEach(res => {
        if (res.status === 'fulfilled') {

            console.log('всё оке' + res.value)
        } else if (res.status === 'rejected') {
            console.log('поломато' + res.reason.message)
        }
    })
})
