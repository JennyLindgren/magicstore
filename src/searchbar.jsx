import React from "react";
import { useState } from "react";
import "./searchbar.css";
import { MagnifyingGlass } from "phosphor-react";

function Searchbar(props) {
  const [search, setSearch] = useState("");

  const onClick = () => {
    props.getData(search);
  };

  return (
    <div className="Searchbar">
      <div className="Search">
        <MagnifyingGlass size={15}></MagnifyingGlass>
        <input
          type="text"
          placeholder="Sök efter produkt"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={onClick}>Sök</button>
      </div>
    </div>
  );
}

export default Searchbar;
