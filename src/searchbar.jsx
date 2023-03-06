import React from "react";
import "./searchbar.css";


function Searchbar() {
    return (
      <div className="Searchbar">
        <label>Sök efter produkter</label><br/>
        <input type="text" />
        <button>Sök</button>
        <h1>Searchbar</h1>
      </div>
    );
  }
  
  export default  Searchbar;