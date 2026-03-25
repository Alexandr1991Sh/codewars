const toFreud = string => string ? string.split(' ').map(word => 'sex').join(' ') : ''

console.log(toFreud("test"))                    // 'sex
console.log(toFreud("This is a test"))          // 'sex sex sex sex'
console.log(toFreud(""))                        //''
console.log(toFreud("This is a longer test"))   //'sex sex sex sex sex'