/*
  debounce(f, ms) – это обёртка, которая откладывает вызовы cb,
  пока не пройдёт ms миллисекунд бездействия
  **/
const debounce = (cb, ms) => {
    let timer
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb.apply(this, args);
        }, ms)
    }
};

const deb = debounce((v) => console.log(v), 500);

// должно вывести только 777999
deb(1);
deb(2);
deb(777999);
