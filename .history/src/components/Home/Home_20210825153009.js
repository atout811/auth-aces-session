import React from "react";
import Header from "../header/Header";
import "./Home.css";

function Home(props) {
  return (
    <div>
      <Header />
      <div className="profile">
        <h1> Welcome </h1>
      </div>
    </div>
  );
}

export default Home;
