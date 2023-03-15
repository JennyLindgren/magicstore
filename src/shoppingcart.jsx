import React, { useContext } from "react";
import "./shoppingcart.css";
import { ShopContext } from "./contex/shop-contex";
import { ShoppingCart } from "phosphor-react";
import { PRODUCTS } from "./products";

function Shoppingcart() {
  const {
    addToCart,
    removeFromCart,
    updateShoppingItemCount,
    cartItems,
    getTotalCartAmount
  } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className="Shoppingcart">
      <h2>Varukorg</h2>
      <ShoppingCart size={32} />
      <div>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id]) {
            return (
              <div className="cartItem" key={product.id}>
                <img src={product.productImage} alt="" />
                <div className="description">
                  <p>
                    <b>{product.productName}</b>
                  </p>
                  <p> Pris: {product.price} SEK</p>
                  <div className="countHandler">
                    <button onClick={() => removeFromCart(product.id)}> - </button>
                    <input
                      value={cartItems[product.id]}
                      onChange={(e) =>
                        updateShoppingItemCount(Number(e.target.value), product.id)
                      }
                    />
                    <button onClick={() => addToCart(product.id)}> + </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <hr />
      Total:{totalAmount} SEK
    </div>
  );
}

export default Shoppingcart;

