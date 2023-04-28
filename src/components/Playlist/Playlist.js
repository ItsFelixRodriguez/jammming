import React from "react";
import './Playlist.css';
import Tracklist from "../Tracklist/Tracklist";
import SaveTo from "../Buttons/SaveTo";

function Playlist () {
    return (
        <div>
        <h3>Playlist</h3>
       <div className="playlist">
       
       <Tracklist />
       <SaveTo />
        </div>
        </div>
    )
};

export default Playlist;