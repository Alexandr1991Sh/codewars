import {useEffect, useState} from "react";

/**
 Написать таймер который запускается/останавливается при клике на кнопку
 если таймер запущен, то каждую секунду он увеличивается на 1
 */

export const Counter = () => {
    const [count, setCount] = useState(0)
    const [isRun, setIsRun] = useState(false)

    useEffect(() => {
        if (!isRun) return
        let timer = setInterval(() => setCount(prev => prev + 1), 1000)
        return () => {
            clearInterval(timer)
        }
    }, [isRun]);

    const handleToggle = () => setIsRun(prev => !prev)

    return (
        <div>
            <div>count: {count}</div>
            <button onClick={handleToggle}>Toggle timer</button>
        </div>
    );
};

export default Counter;
