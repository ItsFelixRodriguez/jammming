import React from "react";
import './App.css'
import Playlist from "../Playlist/Playlist";
// import Tracklist from "../Tracklist/Tracklist";
import SearchResults from "../SearchResults/SearchResults";
import SearchBar   from "../SearchBar/SearchBar"


function AppComponent() {
    return (
        <div>
        <h1>Jammming - Playlist Tool</h1>
            <div className="searchBar">
                <SearchBar /> 
            </div>
             <div className="container">
                <SearchResults />
                <Playlist />
            </div>

        </div>

    )
}

export default AppComponent;