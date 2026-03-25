import React, {memo, useState, useCallback, useEffect, useMemo, useLayoutEffect, useRef, StrictMode} from 'react';
import ReactDOM from 'react-dom/client';

export const Clicker = () => {
    const [clicks, setClicks] = useState(0);

    const onClick = () => {
        setTimeout(() => {
            setClicks(clicks + 1);
        }, 2000);
    };

    return (
        <>
            {clicks}
            <button onClick={onClick}>Increment</button>
        </>
    );
}

const App = () => {
    return (
        <div className="App">
            <Clicker/>
        </div>
    )
}

/*---------------------------------------------------------------------------*/

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as any);

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);