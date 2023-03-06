import React from "react";
import Searchbar from './searchbar';
import Searchresult from './searchresult';
import './App.css';
import Shoppingcart from './shoppingcart';

function App() {
  return (
    <div className="App">
      <h1>The magic store</h1>
      <Searchbar/>
      <Searchresult/>
      <Shoppingcart/>
    </div>
  );
}

export default App;
