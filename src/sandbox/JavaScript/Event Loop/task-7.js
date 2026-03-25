//==============  1)
Promise.reject("a")
    .catch((p) => p + "b")
    .catch((p) => p + "c")
    .then((p) => p + "d")
    .then((p) => console.log(p));

// abd

// ============== 2)
Promise.reject("a")
    .then((p) => p + "2")
    .then((p) => p + "3")
    .catch((p) => {
        throw "4";
    })
    .catch((p) => p + "5")
    .catch((p) => p + "7")
    .then((p) => p + "8")
    .catch((p) => p + "9")
    .then(console.log);


