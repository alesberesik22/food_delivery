import React from "react";
import "./Header.scss";
import logo from "../assets/images/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <header className="header">
      <div className="header_logo">
        <img src={logo} alt="logo" />
        <p className="header_logo_text">Food Delivery</p>
      </div>
      <div className="links">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Services</li>
        </ul>
        <div className="shopping_card">
          <AiOutlineShoppingCart />
          <div className="shopping_card_number">
            <p>2</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
