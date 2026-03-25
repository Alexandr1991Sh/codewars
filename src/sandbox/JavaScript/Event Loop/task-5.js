setTimeout(console.log(1));

new Promise(function (resolve, reject) {
    resolve();
})
    .then(() => console.log(2))
    .then(() => console.log(3))
    .catch(() => console.log("err"))
    .then(() => setTimeout(() => console.log(4)));

console.log(5);

