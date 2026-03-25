import {useState, useEffect} from "react";

/**
 Написать таймер который запускается/останавливается при клике на кнопку
 если таймер запущен, то каждую секунду он увеличивается на 1
 */

export const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        if (!toggle) return

        let timer = setInterval(() => {
            setCounter(prev => prev + 1)
        }, 1000)

        return () => clearInterval(timer)

    }, [toggle])

    const toggleCounterHandler = () => setToggle(!toggle)


    return (
        <div>
            <div>count: {counter}</div>
            <button onClick={toggleCounterHandler}>Toggle timer</button>
        </div>
    );
};

export default Counter;
