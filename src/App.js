import React, { useState } from "react";

import Searchbar from "./searchbar";
import Searchresult from "./searchresult";
import "./App.css";
import ShoppingCart from "./shoppingcart";
import { ShopContextProvider } from "./contex/shop-contex";


function App() {
  const [data, setData] = useState('');
  function handleClick(e) {
    setData(e)
  }
  return (
    <ShopContextProvider data={data}>
    <div className="App">
      <div className="header">
        <h1>The Phone store</h1>
      </div>
      <div className="container">
        <div className="search">
          <Searchbar handleClick={handleClick} />
        </div>
        <div className="result">
          <Searchresult searchData={data} />
        </div>
        <div className="cart">
          <ShoppingCart />
        </div>
      </div>
    </div>
    </ShopContextProvider>
  );
}

export default App;
