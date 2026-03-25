import React, {useState} from 'react';

const initialState = [
    {id: 1, completed: false, item: 'React'},
    {id: 2, completed: false, item: 'Redux'},
    {id: 3, completed: false, item: 'Js'},
]

export const Todos = () => {
    const [todo, setTodo] = useState(initialState)

    const deleteTodo = (id: number) => setTodo(todo.filter(el => el.id !== id))


    return (
        <>
            {todo.map((el) => {
                return (
                    <span>
                        <li key={el.id}>
                            {el.item}
                            <button onClick={() => deleteTodo(el.id)}>x</button>
                        </li>
                  </span>
                )
            })}

        </>
    );
};

