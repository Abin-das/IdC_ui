import React, { useState } from "react";
import CustomizedProgressBars from "./Progressbar";
import "../Page3/progressbar.css";

import VerticalLinearStepper from "./vertical stepper";


const QuestionPage = () => {
  const [Progress, newProgress] = useState(0);
  const newdata = (newdatas) => {newProgress(newdatas)};
  const news= (num) => {setNum(num)};
  const [num, setNum] = useState(0);
  return (
    <div>
      <div className="miniNavbar">
        <h3 className="">Let's get started</h3>
        <span className="progress">
          <span className="num">
            <span className="one">{num}</span>/10
          </span>
          {<CustomizedProgressBars count={Progress}  />}
        </span>
      </div>
      <div>{<VerticalLinearStepper name ={newdata} number={news} />}</div>
    </div>
  );
};

export default QuestionPage;
