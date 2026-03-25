let x = 0

function count() {
    let y = 0
    let getX = () => console.log(x)

    let getY = () => console.log(y)
    return {
        inc() {
            x++
            y++
        }, getX, getY
    }
}


count().inc()
count().inc()
count().getX()
count().getY()

