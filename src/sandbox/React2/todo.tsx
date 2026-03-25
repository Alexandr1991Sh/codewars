// import {useState, useEffect} from "react";

import {useState} from "react";

/**
 Написать todo лист на react, с функционалом
 - изменения статуса completed/uncompleted, в случае если completed, то элемент перечеркут
 - список итемов
 - инпут с возможностью добавления нового итема
 */

const initialState = [
    {id: 1, completed: false, item: 'React'},
    {id: 2, completed: false, item: 'Redux'},
    {id: 3, completed: false, item: 'JS'},
]

export const Todo = () => {
    const [task, setTask] = useState(initialState)
    const [value, setValue] = useState('')

    const addTaskHandler = () => {
        setTask([...task, {id: Date.now(), completed: false, item: value}])
        setValue('')
    }

    const toggleCheckboxHandler = (id: number) => {
        setTask(task.map(t => t.id === id ? {...t, completed: !t.completed} : t))
    }

    return <>
        <input value={value} type="text" onChange={e => setValue(e.target.value)}/>
        <button onClick={addTaskHandler}>add task</button>
        {task.map(t => {
            return (
                <li key={t.id}>
                    <input type="checkbox" onClick={() => toggleCheckboxHandler(t.id)}/>
                    <span style={t.completed ? {textDecoration: 'line-through'} : undefined}>{t.item}</span>
                </li>
            )
        })}
    </>
};

