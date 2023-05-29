import React from "react";
import "../Navbar/navbar.css";

const navbar = () => {
  return (
    <div className="nav">
      <ul>
        <li className="left">
          <a className="active" href="/">
            <img className="nav_img_11"alt="" src={require("../../../Picture/image 1.png")} />
          </a>
        </li>
        <li className="right">
          <a className="" href="/">
            <img className="nav_img_2"alt="" src={require("../../../Picture/Group 2149.png")} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
