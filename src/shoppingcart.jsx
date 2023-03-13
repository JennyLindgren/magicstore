import React from "react";
import "./shoppingcart.css";
import {ShoppingCart} from "phosphor-react"


function Shoppingcart() {
    return (
      <div className="Shoppingcart">
        <h2>Varukorg</h2>
        <ShoppingCart size={32}/>
        <div>

        </div>
        <hr/>
        Total:    SEK
      </div>
    );
  }
  
  export default Shoppingcart;