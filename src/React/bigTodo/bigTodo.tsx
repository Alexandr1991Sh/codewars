import React, {useEffect, useState} from 'react';

type TaskType = {
    id: number;
    item: string;
    isComplete: boolean;
}

const initialState = [
    {id: 1, isComplete: false, item: 'React'},
    {id: 2, isComplete: false, item: 'Redux'},
    {id: 3, isComplete: false, item: 'Js'},
]

export const BigTodo = () => {
    const [task, setTask] = useState(initialState);
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null);


    const addTaskHandler = () => {
        setTask([...task, {id: Date.now(), isComplete: false, item: value}]);
        setValue('')
    }

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await new Promise<{ data: TaskType[] }>((resolve, reject) => {
                    resolve({
                        data: [
                            {id: 1, isComplete: false, item: 'учу React'},
                            {id: 2, isComplete: false, item: 'учу Redux'},
                            {id: 3, isComplete: false, item: 'учу Js'},
                        ]
                    })
                })
                setTask(response.data)

            } catch (e) {
                const error = e as Error;
                setError(error.message || 'Произошла не известная ошибка')


            } finally {
                setLoading(false)
            }
        }

        fetchInitialData()
    }, [])


    const removeTaskHandler = (id: number) => setTask(task.filter(t => t.id !== id))

    const toggleTaskHandler = (id: number) => {
        setTask(task.map(t => t.id === id ? {...t, isComplete: !t.isComplete} : t))
    }

    const sortItemsHandler = () => {
        setTask([...task].sort((a, b) => a.item.length - b.item.length))
    }

    if (loading) return <IsLoading/>


    return (
        <>
            <input value={value} type="text" onChange={e => setValue(e.target.value)}/>
            <button onClick={addTaskHandler}>add task</button>
            {task.map(t => {
                return (
                    <li key={t.id}>
                        <span style={{textDecoration: t.isComplete ? 'line-through' : 'none'}}>{t.item}</span>
                        <input type="checkbox" onClick={() => toggleTaskHandler(t.id)}/>
                        <button onClick={() => removeTaskHandler(t.id)}>x</button>
                    </li>
                )
            })}
            <button onClick={sortItemsHandler}>sorted</button>
        </>
    );
};

const IsLoading = () => {
    return (
        <span>Loading...</span>
    )
}
