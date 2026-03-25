// Сделать аналог Promise.all и Promise.allSettled

const resolveFunc = async (val, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(val);
        }, timeout);
    });
};

const rejectFunc = async (val, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(val);
        }, timeout);
    });
};

const requests = [
    resolveFunc(1, 100),
    resolveFunc(2, 900),
    resolveFunc(3, 800),
    resolveFunc(4, 1500),
    resolveFunc(5, 3500),
    resolveFunc(6, 1500),
];

promiseAll(requests).then(console.log).catch(console.error);

promiseSettled(requests).then(console.log).catch(console.error);
