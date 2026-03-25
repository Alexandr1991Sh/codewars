let x = 0

function count() {
    let y = 0
    getX = () => console.log(x)
    getY = () => console.log(y)

    return {
        inc() {
            x++, y++
        }, getX, getY
    }
}

count().inc()
count().inc()
count().getX()
count().getY()