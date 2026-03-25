import React from 'react';

// export const Information = (errors) => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [isFinished, setIsFinished] = useState(false);
//     const [text, setText] = useState(false)
//
//     const handleClick = () => setText(!text);
//
//     const renderHeader = () => (
//     return (
//         <h2>Attention</h2>
//     )
// )
//
//     const renderBody = () => {
//         return (
//             <p>You have error in your form data. Please, correct the following mistakes:</p>
//         )
//     }
//
//     const fetchSomething = () => {
//         setIsLoading(true)
//
//         fetch(url)
//             .then(() => {
//                 setIsLoading(false)
//                 setIsFinished(true)
//             })
//             .catch(() => {
//                 setHasError(true)
//             })
//     }
//
//     useEffect(() => {
//         fetchSomething();
//     });
//
//     if (isLoading) return <Loader />
//
//     return (
//         <div>
//             {renderHeader()}
//             {renderBody()}
//             <div onClick={handleClick}>Toggle to see errors</div>
//             {text ? <div>{errors.map(item => <p>{item}</p>)}</div> : null}
//         </div>
//     )
// }