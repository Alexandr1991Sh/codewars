/**
 *Получние данных с количестом попыток на перезапрос. Реализовать функцию, которая будет делать сетевой запрос.
 Если он завершается с ошибкой, то повторяет его
 После retryCount неудачных попыток - завершается ошибкой. Или возвращает успешный результат.
 */

const fetchRetry = async (url, retryCount = 5) => {
    try {
        const data = await fetch(url)
        return await data.json()
    } catch (e) {
        retryCount -= 1
        if (retryCount === 0) {
            console.log('ERRORRR')
        } else {
            fetchRetry(url, retryCount)
        }
    }
};

fetchRetry("/", 5);
fetchRetry("/", 2);
