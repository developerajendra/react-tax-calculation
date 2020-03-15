import React, {useState} from 'react';

export const UseStatePractice = ()=>{
    const [counter,changeCounter] = useState(0);

    return <div>
            <h2>{counter}</h2>
         <button onClick={e=>changeCounter(counter+1)}>click me</button>
    </div>
};   