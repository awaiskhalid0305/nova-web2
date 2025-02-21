import React from "react";
import "./index.css";
import { img1, img2, img3 } from "@/assets";

const Product = ({ productsArr, addToCart }) => {
  return (
    <div className="product-main-container">
      <h1>Products</h1>
      <div className="product-sub-container">
        {productsArr?.map((item, i) => (
          <div key={i} className="product-container">
            <img src={item?.img} alt="" />
            <div className="product-name-container">
              <h2>{item?.productName}</h2>
              <h3>{item?.off}</h3>
            </div>
            <div className="product-des">
              <h2>{item?.des}</h2>
            </div>
            <div className="product-price-des">
              <h2>${item?.price}</h2>
              <div onClick={() => addToCart(item)} className="add-cart-btn">
                <h3>Add To cart</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
