import React from "react";
import "../Banner/banner.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const banner = () => {
  return (
    <div>
      <div className="banner_img">
        <div className="heading_text">
          <h2 className="top_heading">
            Analytics Process
            <br />
            Automation Survey{" "}
          </h2>
          <h4 className="sub_text">
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteratio
          </h4>

          <Link to={"/SecondPage"}>
            {" "}
            <Button className="buttons" variant="contained">
              Take the Assesment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default banner;
