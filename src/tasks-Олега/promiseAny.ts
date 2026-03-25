import React from "react";

const p1: Promise<unknown> = new Promise((resolve, reject) => {
    throw new Error('Uh-oh!');
});

let p2: Promise<unknown> = new Promise((resolve, reject) => {
    resolve("p2 ok");
});

Promise.any([p1, p2]).then((result) => {
    console.log('result=' + result);
}).catch((error) => {
    console.log('error=' + error);
});
