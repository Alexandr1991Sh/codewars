import React, {useEffect, useState} from "react";

// ['hello', 'again', 'hello', "Just called to say hello"]

export function Component() {
    const [data, setData] = useState<string[]>([])

    const fetchData = () => {
        fetch('api/tada.json').then((res) => res.json()).then(data => setData(data))
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <ul>
                {data.map((el, index) => {
                    return (
                        <li key={index}>{el}</li>
                    )
                })}
            </ul>
        </>
    )
}
