import React, { useReducer} from 'react'
import CounterReducer from './CounterReducer';

const  Child2 = () => {

    let [state, dispatch] = useReducer(CounterReducer, 0);

    console.log(state)
    return(
            <div>
                <h4>This is Second child using counter Reduce</h4>
                <h5>value of counter reducer is :{state}</h5>
                <button onClick={()=>dispatch('INCREAMENT')}>increament reducer</button>

            </div>

        )
    }
 export default Child2