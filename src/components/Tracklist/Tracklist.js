import React from "react";
import './Tracklist.css';
import Track from "../Track/Track";

function Tracklist() {
    return (
        <div>
            <h3> Tracklist</h3>
            <ul>
                <li><Track /></li>
            </ul>
        </div>
    )
}

export default Tracklist;