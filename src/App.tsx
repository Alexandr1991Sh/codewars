import React, {useState} from 'react';
import './App.css';

function App() {
    //useState
    let [playerCounter1, playCounter1] = useState(10)
    let [playerCounter2, playCounter2] = useState(10)

    return (
        <div className="App">
            {/*<div>Alex</div>*/}
            {/*<div>{playerCounter1}</div>*/}
            {/*<button onClick={() => {*/}
            {/*    playCounter1((actual)=> actual + 1)*/}
            {/*}}>+*/}
            {/*</button>*/}
            {/*<hr/>*/}
            {/*<div>Dima</div>*/}
            {/*<div>{playerCounter2}</div>*/}
            {/*<button onClick={() => {*/}
            {/*    playCounter2((actual)=> actual + 1)*/}
            {/*}}>+*/}
            {/*</button>*/}
            {/*<hr/>*/}
            {/*<button onClick={() => {*/}
            {/*    playCounter1((actual)=> actual - 1)*/}
            {/*    playCounter2((actual)=> actual - 1)*/}
            {/*}}>-*/}
            {/*</button>*/}
        </div>
    );
}

export default App;



