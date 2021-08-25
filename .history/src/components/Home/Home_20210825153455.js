import React from "react";
import Header from "../header/Header";
import "./Home.css";

function Home(props) {
  return (
    <div>
      <Header />
      <div className="profile">
        <h1> Welcome </h1>
        <div className="content">
          <div className="row">
            <div className="record">
              <span>Name :</span>
            </div>
            <div className="record">
              <span>Email :</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
