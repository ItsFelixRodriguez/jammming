import React from "react";
import './App.css'
import Playlist from "../Playlist/Playlist";
import Tracklist from "../Tracklist/Tracklist";


function AppComponent() {
    return (
        <div>
        <h1>This is The AppComponent that the other parts of the app are pushed to.</h1>
        
        <Playlist />
        <Tracklist />
        </div>

    )
}

export default AppComponent;