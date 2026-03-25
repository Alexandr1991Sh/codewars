const array = str => str.split(',').slice(1, -1).join(' ') || null

console.log(array('A1,B2'))                                // null
console.log(array('1'))                                    // null
console.log(array(''))                                     // null
console.log(array('1,2,3,4'))                              // '2 3'
console.log(array('A1,B2,C3,D4,E5'))                       // 'B2 C3 D4'
console.log(array('A1,B2,C3,D4,E5'))                       // 'B2 C3 D4'