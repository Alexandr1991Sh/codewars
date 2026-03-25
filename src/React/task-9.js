let x = 0;

function count() {
    let y = 0;
    const getx = () => console.log(x);
    const gety = () => console.log(y);
    return {
        inc() {
            x++;
            y++;
        }, getx, gety
    };
}

count().inc();
count().inc();
count().getx();
count().gety();
