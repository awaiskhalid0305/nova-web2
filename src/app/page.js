"use client"; // <–– Add this at the top
import "./index.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./product/page";
import { Button, Drawer } from "antd";
import { deleteIcon, img1, img2, img3 } from "@/assets";
import { ToastContainer } from "react-toastify";
import { GreenNotify, RedNotify } from "./helper/helper";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  let productsArr = [
    {
      id: 1,
      productName: "Face wax",
      off: "30%",
      des: "Waxing is a method of hair removal that involves applying hot ",
      price: 25,
      img: img1.src,
      quantity: 1,
    },
    {
      id: 2,
      productName: "Face cream",
      off: "20%",
      des: "Waxing is a method of hair removal that involves applying hot ",
      price: 40,
      img: img2.src,
      quantity: 1,
    },
    {
      id: 3,
      productName: "Sugar wax",
      off: "40%",
      des: "Waxing is a method of hair removal that involves applying hot ",
      price: 10,
      img: img3.src,
      quantity: 1,
    },
    {
      id: 4,
      productName: "Face wax",
      off: "30%",
      des: "Waxing is a method of hair removal that involves applying hot ",
      price: 25,
      img: img1.src,
      quantity: 1,
    },
  ];

  const addToCart = (item) => {
    const isAlreadyAdd = cartItems?.some((val) => val.id == item.id);
    isAlreadyAdd
      ? RedNotify("Already Added In Cart")
      : (() => {
          setCartItems([item, ...cartItems]);
          //GreenNotify("Product Add successfully in cart");
        })();
  };

  const totalAmount = (i, check) => {
    if (check == "increase") {
      const newArrIn = cartItems?.map((nItem, index) =>
        index == i ? { ...nItem, quantity: nItem.quantity + 1 } : nItem
      );
      setCartItems(newArrIn);
    } else {
      const newArrDec = cartItems?.map((nItem, index) =>
        index == i ? { ...nItem, quantity: nItem.quantity - 1 } : nItem
      );
      setCartItems(newArrDec);
    }
  };

  const deleteProduct = (item) => {
    let newArr = cartItems?.filter((obj) => obj.id !== item.id);
    setCartItems(newArr);
  };

  let countTotalPrice =
    cartItems.length !== 0 &&
    cartItems
      .map((item) => item.price * item.quantity)
      .reduce((cal, curr) => cal + curr, 0);

  return (
    <div>
      <ToastContainer />
      <Drawer title="Cart" onClose={() => setOpen(false)} open={open}>
        <div>
          {cartItems.length !== 0 ? (
            cartItems?.map((item, i) => (
              <div key={i} className="cart-product-container">
                <div className="cart-image">
                  <img alt="img" src={item.img} />
                </div>

                <div key={i} className="cart-product-detail-container">
                  <h2>{item?.productName}</h2>
                  <h3>${item?.price}</h3>
                  <div className="cart-count-container">
                    {item.quantity <= 1 ? (
                      <img
                        onClick={() => deleteProduct(item)}
                        alt="img"
                        src={deleteIcon.src}
                      />
                    ) : (
                      <button
                        onClick={() => totalAmount(i, "decrease")}
                        className="cart-in-container"
                        style={{
                          backgroundColor:
                            item.quantity <= 1 ? "#dfe2e8" : "#ee509c",
                        }}
                      >
                        <p>-</p>
                      </button>
                    )}

                    <div className="cart-count">
                      <p>{item?.quantity}</p>
                    </div>
                    <button
                      onClick={() => totalAmount(i, "increase")}
                      className="cart-in-container"
                    >
                      <p>+</p>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2>Cart is Empty</h2>
          )}
          <div className="price-container">
            <h2>
              Total Price :
              <span style={{ color: "#ee509c" }}>${countTotalPrice}</span>
            </h2>
          </div>
        </div>
      </Drawer>
      <Navbar toggleDrawer={toggleDrawer} count={cartItems.length} />
      <Product productsArr={productsArr} addToCart={addToCart} />
    </div>
  );
}
