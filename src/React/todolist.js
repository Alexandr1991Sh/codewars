/**
 Написать todo лист на react, с функционалом
 - изменения статуса completed/uncompleted, в случае если completed, то элемент перечеркут
 - список итемов
 - инпут с возможностью добавления нового итема
 */
import {useState} from "react";

const initialState = [
    {id: 1, completed: false, item: 'JS'},
    {id: 2, completed: false, item: 'React'},
    {id: 3, completed: false, item: 'Redux'},
]

export const TodoList = () => {
    const [value, setValue] = useState('')
    const [task, setTask] = useState(initialState)


    const addTodoHandler = () => {
        setTask([...task, {id: Date.now(), item: value}])
        setValue('')
    }

    const toggleCheckboxHandler = (id) => {
        setTask(task.map(t => t.id === id ? {...t, completed: !t.completed} : t))
    }

    const deleteTaskHandler = (id) => {
        setTask(task.filter(t => t.id !== id))
    }

    return (
        <div>
            {task.map(t => {
                return (
                    <li key={t.id}>
                        <label>
                            <input type="checkbox" checked={t.completed}
                                   onChange={() => toggleCheckboxHandler(t.id)}/>
                            <span style={{textDecoration: t.completed ? 'line-through' : 'none'}}>
                {t.item}
                                <button onClick={() => deleteTaskHandler(t.id)}>x</button>
              </span>
                        </label>
                    </li>
                )
            })}
            <input value={value} type="text" onChange={e => setValue(e.target.value)}/>
            <button onClick={addTodoHandler}>add todo</button>
        </div>
    )
};

