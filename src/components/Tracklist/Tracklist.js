import React from "react";
import './Tracklist.css';
import Track from "../Track/Track";

function Tracklist() {
    return (
        <div>
            <h3> I'm a tracklist component exported to AppComponent.js</h3>
            <ul>
                <li><Track /></li>
            </ul>
        </div>
    )
}

export default Tracklist;