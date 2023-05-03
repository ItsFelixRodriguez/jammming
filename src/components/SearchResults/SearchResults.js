import React from 'react';
import './SearchResults.css'
import Track from '../Track/Track.js'

function SearchResults () {
    return (
        <div>
            <h3>Search Results</h3>
            <div className="results">
            <ul>
                <li><Track /></li>
            </ul>
            </div>
        </div>

    )
}

export default SearchResults;