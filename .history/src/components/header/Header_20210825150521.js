import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div>
      <div className="header">
        <Link className="item">Home</Link>

        <Link className="item">Login</Link>
        <Link className="item">Signup</Link>
      </div>
    </div>
  );
}

export default Header;
