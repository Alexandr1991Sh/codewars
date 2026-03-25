import React from "react";

const p1: Promise<unknown> = new Promise((resolve, reject) => {
    throw new Error('Uh-oh!');
});

const p2: Promise<unknown> = new Promise((resolve, reject) => {
    resolve("p2 ok");
});

Promise.all([p1, p2]).catch((error) => {
    console.log('error=' + error);
}).then((result) => {
    console.log('result=' + result);
});
