import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "./Header.css"; // Import CSS for styling

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <span className="ecommerce-title">ECOMMERCE</span>
        </div>
        <div className="navbar-center">
          <ul className="navbar-nav">
            <li className="nav-item">Categories</li>
            <li className="nav-item">Sale</li>
            <li className="nav-item">Clearance</li>
            <li className="nav-item">New Stock</li>
            <li className="nav-item">Trending</li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul className="navbar-nav">
            <li className="nav-item">Help</li>
            <li className="nav-item">Order & Returns</li>
            <li className="nav-item">Hi, John</li>
          </ul>
          <div>
            <div className="nav-seach-icon">
              <FaSearch />
            </div>
            <div className="nav-cart-icon">
              <FaShoppingCart />
            </div>
          </div>
        </div>
      </nav>
      <div className="offers">
        <span>get 10% off on business sign up</span>
      </div>
    </>
  );
};

export default Header;
