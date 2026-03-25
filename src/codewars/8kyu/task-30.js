// function calculateTip(amount, rating) {
//     const ratingLow = rating.toLowerCase()
//     if (ratingLow === 'terrible') {
//         return 0
//     } else if (ratingLow === 'poor') {
//         return Math.ceil(amount * 5 / 100)
//     } else if (ratingLow === 'good') {
//         return Math.ceil(amount * 10 / 100)
//     } else if (ratingLow === 'great') {
//         return Math.ceil(amount * 15 / 100)
//     } else if (ratingLow === 'excellent') {
//         return Math.ceil(amount * 20 / 100)
//     }
//     return "Rating not recognised"
// }

function calculateTip(amount, rating) {
    const dictionary = {'terrible': 0, 'poor': 5, 'good': 10, 'great': 15, 'excellent': 20}
    const ratingLow = rating.toLowerCase()
    return dictionary[ratingLow] !== undefined ? Math.ceil(amount * dictionary[ratingLow] / 100) : "Rating not recognised"
}


console.log(calculateTip(20, "Excellent"))      //4
console.log(calculateTip(26.95, "good"))        //3
