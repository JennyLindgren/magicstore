import React, { useState } from "react";
import "./modal.css"; // Importera CSS för modalen

function Modal({ product }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleShowModal}>Visa produktbeskrivning</button>

      {/* Visa modalen om showModal är true */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>{product.productName}</h2>
              <button onClick={handleCloseModal}>Stäng</button>
            </div>
            <div className="modal-body">
              <img src={product.productImage} alt={product.productName} />
              <p>{product.text}</p>
              <p>Pris: {product.price} kr</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
