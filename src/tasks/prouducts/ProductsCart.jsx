// import React from "react";
import { useDispatch } from "react-redux";
import "./ProductsCart.css";
import { add, rem } from "./productSlice";

const ProductsCart = ({ product, id, remove }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  const handleRemove = (product) => {
    dispatch(rem(product));
  };

  return (
    <div className="shopping-cart-item" key={id}>
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{product.title.substring(0, 30)}...</h2>
        <p className="product-description">
          {product.description.substring(0, 40)}...
        </p>
        <p className="product-category">{product.category}</p>
        <div className="product-rating">
          <span>
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </span>
        </div>
        <p className="product-price">${product.price}</p>

        {remove ? (
          <button onClick={() => handleRemove(product)}>Remove</button>
        ) : (
          <button
            className="add-to-cart-button"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductsCart;
