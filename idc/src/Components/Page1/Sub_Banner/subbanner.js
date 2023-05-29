import React from "react";
import "../Sub_Banner/subbanner.css";
import sub1 from "../../../Picture/Frame 1.png";
import sub2 from "../../../Picture/Frame 2.png";
import sub3 from "../../../Picture/Frame 3.png";

const subbanner = () => {
  return (
    <div className="subtext">
      <div className="sub1">
        <img className="img1" src={sub1} alt="img" />
        <h3>
          Contrary to popular belief, Lorem Ipsum s not simply random text.{" "}
        </h3>
      </div>
      <div className="sub1">
        <img className="img1" src={sub2} alt="img" />
        <h3>
          Contrary to popular belief, Lorem Ipsum s not simply random text.{" "}
        </h3>
      </div>
      <div className="sub1">
        <img className="img1" src={sub3} alt="img" />
        <h3>
          Contrary to popular belief, Lorem Ipsum s not simply random text.{" "}
        </h3>
      </div>
    </div>
  );
};

export default subbanner;
