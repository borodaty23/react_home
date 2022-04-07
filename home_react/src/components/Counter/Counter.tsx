import React, {useState, useEffect, useCallback, useRef} from 'react'

export const Counter = () => {

    const [btnState, setBtnState] = useState(false)
    const [counter, setCounter] = useState(0)

    let intervalRef = useRef();

    const countPlus = () => setCounter((prev) => prev + 1)

    useEffect(() => {
        intervalRef.current = setInterval(countPlus, 1000);
    
        return () => clearInterval(intervalRef.current);
      }, []);

      const handleClick = () => {
        if (!btnState) {
          clearInterval(intervalRef.current);
        } else {
          intervalRef.current = setInterval(countPlus, 1000);
        }
        setBtnState((prev) => !prev);
      };

    // const btnClick = () => {
    //         setBtnState(!btnState)
    //         let x = setInterval(() => {
    //             setCounter(counter => counter + 1)
    //             if(counter === 3){
    //                clearInterval(x)
    //             }
    //          }, 1000) 
    // }

// const btnClick = () => {
//     let x
//     setBtnState(!btnState)
//     if(btnState===false){
//         x = setInterval(() => {
//             setCounter(counter => counter + 1)
//         }, 1000) 
        
//     }else{
//         debugger
//         clearInterval(x)
//         setCounter(0)
//     }
// }

// useEffect(()=>{
//     let x
//     if(btnState){
//          x = setInterval(() => {
//             setCounter(counter => counter + 1);
//         }, 1000)
//     }else{
//         clearInterval(x);
//         setCounter(0);
//     }
// },[btnState])


  return (
    <>
    <button  onClick={handleClick} >{btnState ? "stop" : "start"}</button>
    <p>Counter: {counter}</p>
    </>
  )
}
