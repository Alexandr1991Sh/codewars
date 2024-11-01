import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    let [clock, setClock] = useState('')
    console.log('App')
    let hours = (new Date()).getHours()
    let minutes = (new Date()).getMinutes()
    let seconds = (new Date()).getSeconds()

    // useEffect(() => {
    //     console.log('setInterval')
    //     setInterval(() => {
    //         setClock(`${hours} : ${minutes} : ${seconds}`)
    //     },1000)
    // }, []);

    // setInterval(() => {
    //     console.log('setInterval')
    //     setClock(`${hours} : ${minutes} : ${seconds}`)
    // },1000)

    return (
        <div className="App">
            clock: {clock}
        </div>
    );
}

console.log((1).toString())

export default App;



