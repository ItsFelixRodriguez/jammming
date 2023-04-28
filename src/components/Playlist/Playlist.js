import React from "react";
import './Playlist.css';
import Tracklist from "../Tracklist/Tracklist";

function Playlist () {
    return (
        <div>
        <h3>Playlist</h3>
       <div className="playlist">
       
       <Tracklist />
        </div>
        </div>
    )
};

export default Playlist;