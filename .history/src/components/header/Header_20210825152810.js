import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div>
      <div className="header">
        <Link to="/" className="item">
          Home
        </Link>

        <Link to="/login" className="item">
          Login
        </Link>
        <Link to="/signup" className="item">
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Header;
