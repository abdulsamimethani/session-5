import React, { useContext }from 'react';
import CounterContext from './CounterContext'

const Child = () => {

     let counterValue = useContext(CounterContext)
     console.log(counterValue)
    return (
        <div>
            <h2>This is first child using Counter Context</h2>
            <h3>counter value is:{counterValue[0]}</h3>
        <button onClick={()=>{counterValue[1](++counterValue[0])}}>Increament</button>
        </div>

    )
}

export default Child;