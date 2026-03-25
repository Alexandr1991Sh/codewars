// import Counter from "../src/sandbox/React2/counter";
// import {CounterTask} from "./sandbox/React/counterTask";
// import {Logs3} from "./sandbox/React/task-7";
// import {Todo} from "../src/sandbox/React2/todo";
// import {Logs} from "../src/sandbox/React2/logs-0";
// import {BigTodo} from "@/React/bigTodo/bigTodo";
// import {TodoList} from '@/React/todolist'
// import {UncontrolledTOdo} from "@/React/uncontrolledTOdo";
// import {Todos} from "../src/React/todos";
import {Clicker} from "../src/tasks-Олега/Clicker";
import {Component} from "../src/tasks-Олега/fetchData";

export default function App() {

    return (
        <>
            <Component/>
            <Clicker/>
            {/*<Counter/>*/}
            {/*<Todos/>*/}
            {/*<UncontrolledTOdo/>*/}
            {/*<TodoList/>*/}
            {/*<BigTodo/>*/}
            {/*<Logs/>*/}
            {/*<Counts/>*/}
            {/*<Todo/>*/}
            {/*<Todo/>*/}
            {/*<Counter/>*/}
            {/*<CounterTask/>*/}
            {/*<Logs3/>*/}
        </>
    );
}



/*
 Вывести значения полей в консоль, при клиике на форму,
 учитывая что первый input controlled, а второй input uncontrolled.
*/

// export default function App() {
//     const onClickForm = () => {
//         console.log("controlled: " /* вставить value1 */);
//         console.log("uncontrolled: " /* вставить value2 */);
//     };
//
//     return (
//         <form onClick={onClickForm}>
//             <input placeholder="controlled"/>
//             <input placeholder="uncontrolled"/>
//
//             <button>Отправить заявку на кредит</button>
//         </form>
//     );
// }

