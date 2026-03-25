console.log("A");

const p = new Promise((resolve) => {
    resolve("");
    console.log("B");
});

p.then(() => {
    p.then(() => console.log("C"));
    console.log("D");
});

setTimeout(() => {
    console.log("E");
}, 0);

p.then(() => console.log("F"));

