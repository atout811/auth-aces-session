import React from "react";
import "Header.css";

function Header(props) {
  return (
    <div>
      <div className="header">
        <div className="item">Home</div>
        <div className="item">Login</div>
        <div className="item">Signup</div>
      </div>
    </div>
  );
}

export default Header;
