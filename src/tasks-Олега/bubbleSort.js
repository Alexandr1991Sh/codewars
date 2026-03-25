const bubbleSort = (arr) => {
    const res = [...arr]
    let swapper = true

    while (swapper) {
        swapper = false
        for (let i = 0; i < res.length - 1; i++) {
            if (res[i] > res[i + 1]) {
                const tmp = res[i]
                res[i] = res[i + 1]
                res[i + 1] = tmp
                swapper = true
            }
        }
    }

    return res
}

console.log(bubbleSort([-12, 12, 3, 5, 1, -133]))