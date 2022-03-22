import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = (props) => {
  const { img, name, price, ratings, seller } = props.product;
  const { handleAddToCart,product } = props;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3>{name}</h3>
        <h4> Price: ${price}</h4>
        <p>Manufracturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button className="button-cart">
        <p className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
