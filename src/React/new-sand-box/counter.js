import {useState, useEffect} from "react";

/**
 Написать таймер который запускается/останавливается при клике на кнопку
 если таймер запущен, то каждую секунду он увеличивается на 1
 */

export const Counter = () => {
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        if (!toggle) return
        const timer = setInterval(() => setCount(pref => pref + 1), 1000)
        return () => {
            clearInterval(timer)
        }

    }, [toggle])

    const handleClickToggle = () => {
        setToggle(pref => !pref)
    }

    return (
        <div>
            <div>count: {count}</div>
            <button onClick={handleClickToggle}>Toggle timer</button>
        </div>
    );
};

