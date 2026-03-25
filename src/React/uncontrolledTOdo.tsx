import React, {useRef, useState} from 'react';

const initialState = [
    {id: 1, completed: false, item: 'учим React'},
    {id: 2, completed: false, item: 'учим Redux'},
    {id: 3, completed: false, item: 'учим Js'},
]

export const UncontrolledTOdo = () => {
    const [task, setTask] = useState(initialState);
    const inputRef = useRef<HTMLInputElement>(null);

    const addTaskHandler = () => {
        // const value = inputRef.current?.value.trim();
        // setTask([...task, {id: Date.now(), completed: false, item: value}]);
        if (inputRef.current?.value.trim()) {
            const value = inputRef.current.value.trim();
            setTask([...task, {id: Date.now(), completed: false, item: value}]);
            inputRef.current.value = ''; // Очистка инпута после добавления
        }
    }

    return (
        <>
            {task.map(t => {
                return (
                    <li key={t.id}>{t.item}</li>
                )
            })}
            <input ref={inputRef} type="text"/>
            <button onClick={addTaskHandler}>add task</button>
        </>
    );
};

