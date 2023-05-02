import React, { useState } from "react";
import './SearchBar.css'

    const SearchBar = () => {
      const [value, setValue] = useState('');
    
      return (
        <div>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => {
            console.log(value);
          }}>Search</button>
        </div>
      );
    };
    
    export default SearchBar;
