import React from "react";
import { useState } from "react";
import './Track.css';

function Track() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count +1);
    }

    return (
        <div>
       <ol>
        <li>Track</li>
        <li>Track</li>

       </ol>
      
            <button onClick={handleClick}>
                I have been clicked {count} times
            </button>
        </div>
    )
}

export default Track