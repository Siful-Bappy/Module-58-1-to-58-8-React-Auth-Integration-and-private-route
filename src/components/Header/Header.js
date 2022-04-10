import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/prducts">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/register">Register</Link>
        <Link to="/about up">About us</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Header;
