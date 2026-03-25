// Promise.any

function customPromiseAny(promises) {
    const result = []



    return result
}

customPromiseAny([
    new Promise((res, rej) => rej("promise1")),
    new Promise((res) => res("promise2")),
    new Promise((res) => res("promise3")),
]).then((r) => console.log(r)); // promise2
