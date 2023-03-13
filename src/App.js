import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Searchbar from "./searchbar";
import Searchresult from "./searchresult";
import "./App.css";
import Shoppingcart from "./shoppingcart";

function App() {
  const [data, setData] = useState([]);

  function getData(search) {
    console.log("getData searchTerm: ", search);
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        //setSearchResults(data.results);
        console.log(data.products);
        setData(data.products);
      });
  }

  return (
    <div className="App">
      <div className="header">
        <h1>The magic store</h1>
      </div>
      <div className="container">
        <div className="search">
          <Searchbar getData={getData} />
        </div>
        <div className="result">
          <Searchresult searchData={data} />
        </div>
        <div className="cart">
          <Shoppingcart />
        </div>
      </div>
    </div>
  );
}

export default App;
