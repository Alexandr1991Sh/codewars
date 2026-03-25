function noBoringZeros(n) {
    if (n === 0) return 0;
    while (n % 10 === 0) n = n / 10
    return n
}

console.log(noBoringZeros(1450))        // 145
console.log(noBoringZeros(960000))      // 96
console.log(noBoringZeros(1050))        // 105