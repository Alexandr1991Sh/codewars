let now = Date.now();

while ((now + 2000) > Date.now()) {}

setTimeout(() => {
    let duration = (Date.now() - now) / 1000;
    console.log('Прошло около ' + Math.floor(duration) + ' сек.');
}, 1000);