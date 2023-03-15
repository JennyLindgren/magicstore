import React, { useContext } from "react";
import "./searchresult.css";
import { ShopContext } from "./contex/shop-contex";
import { PRODUCTS } from "./products";
import Modal from "./modal";

// filtrerar genom produkterna 
const Searchresult = (props) => {
  const searchedResult = PRODUCTS.filter(product => {
    if(props.searchData === '') {
      return '';
    } else {
      return product.productName.toLowerCase().includes(props.searchData)
    }
  })
    
    
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="Searchresult">
      <h2>Searchresult</h2>
      {searchedResult.map((product) => {
        return (
          <div className="box" key={product.id}>
            <img src={product.productImage} alt=""></img>
            <h4>{product.productName}</h4>
            {product.price} kr
            <Modal product={product} />
            <button
              className="addToCartBttn"
              onClick={() => addToCart(product.id)}
            >
              Lägg i varukorg
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Searchresult;
