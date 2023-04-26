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
         <p>I'm a track component exported to a tracklist component</p>
      
            <button onClick={handleClick}>
                I have been clicked {count} times
            </button>
            </div>
    )
}

export default Track