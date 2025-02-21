"use client";
import React, { useState } from "react";
import "./indx.css";
import close from "../../assets/close.png";
import menu from "../../assets/menu.png";
import { useRouter } from "next/navigation";
import { cart, logo, search } from "@/assets";

const Navbar = ({ toggleDrawer, count }) => {
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => (
    <>
      <div className="cactus__navbar-links_text_view">
        <h1 onClick={() => router.push("/")}>Home</h1>
      </div>
      <div className="cactus__navbar-links_text_view">
        <h1 onClick={() => router.push("/")}>Products</h1>
      </div>
      <div className="cactus__navbar-links_text_view">
        <h1>Mug</h1>
      </div>
      <div className="cactus__navbar-links_text_view">
        <h1>Gift Idea</h1>
      </div>
      <div className="cactus__navbar-links_text_view">
        <h1 onClick={() => router.push("/")}>About us</h1>
      </div>
      <div className="cactus__navbar-links_text_view">
        <h1 onClick={() => router.push("/contactus")}>Contact Us</h1>
      </div>
      <div onClick={toggleDrawer} className="cactus__navbar-links_input_view">
        <img alt="" src={cart?.src} />
        <div className="cart-number">
          <p className="number">{count}</p>
        </div>
      </div>
    </>
  );

  return (
    <div className="cactus__navbar">
      <div className="cactus__navbar-links_logo">
        <img src={logo?.src} alt="Logo" />
        <p>NOVA Cactus</p>
      </div>
      <div className="cactus__navbar-links">
        <div className="cactus_navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="cactus__navbar-menu">
        {toggleMenu ? (
          <img
            alt="Close"
            onClick={() => setToggleMenu(!toggleMenu)}
            src={close}
            className="cactus__navbar_closeIcon"
          />
        ) : (
          <img
            alt="Menu"
            onClick={() => setToggleMenu(!toggleMenu)}
            src={menu}
            className="cactus__navbar_menuIcon"
          />
        )}
        {toggleMenu && (
          <div className="cactus__navbar-menu_container scale-up-center">
            <div className="cactus__navbar-menu_container_links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
