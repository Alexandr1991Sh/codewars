// написать функцию для создания задержки

function sleep(time = 100) {
    console.log('перед задержкой')
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(time)
            console.log('после задержки')
        }, time)
    })
}

// async function sleep(time = 100) {
//     console.log('перед задержкой')
//     await new Promise(resolve => setTimeout(resolve, time));
//     console.log('после задержки')
// }

sleep(5000);
