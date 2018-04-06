import React from "react";
import addIconImage from "../../images/icons/add-icon.svg";
import removeIconImage from "../../images/icons/remove-icon.svg";

export default function CartItem({ name, cost, image, isSelected, onToggle }) {
  return (
    <div className={`cart__item ${isSelected ? "cart__item--selected" : ""}`} onClick={onToggle}>
      <div className="cart__item-name">{name}</div>
      <div className="cart__item-cost">${cost}</div>
      <div className="cart__item-image">{/* <img src="" alt="" width="200" height="200" /> */}</div>
      <div className="cart__item-button">
        {isSelected ? (
          <img src={removeIconImage} alt="Remove Item" />
        ) : (
          <img src={addIconImage} alt="Add Item" />
        )}
      </div>
    </div>
  );
}
