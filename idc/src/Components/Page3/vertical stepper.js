import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "../Page3/progressbar.css";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    question:
      "DATA PRACTICES - Which of the following best describes the data governance of your organization, or the area you oversee?",
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
  {
    question:
      "PROCESS PRACTICES - Which of the following best describes the process of generating insights from data using analytics in your organization, or the area you oversee?",
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
  {
    question:
      "PROCESS PRACTICES - Which of the following best describes the management of the process of generating insights from data using analytics in your organization, or the area you oversee? ",
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
  {
    question:
      "PEOPLE (WORKFORCE) PRACTICES - Which of the following best describes the data management roles and skills of your organization, or the area you oversee?",
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
  {
    question:
      "PEOPLE (WORKFORCE) PRACTICES - Which of the following best describes the data management roles and skills of your organization, or the area you oversee?",
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
  {
    question:
      "STRATEGY PRACTICES - Which of the following best describes the data and analytics strategy of your organization?",
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
  {
    question:
      "STRATEGY PRACTICES - What are your organization's top business priorities for 2021-2022?",
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
  {
    question:
      "RESULTS AND PERFORMANCE - Do you agree that your data and analytics practices, use cases and applications are important for your organization, or the area you oversee, to stay performant?",
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
  {
    question:
      "RESULTS AND PERFORMANCE - How do you assess your organization's performance in the past 12 months in the following categories, when compared with the peers in the same industry/geo? ",
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
  {
    question:
      "CHALLENGES - What are the most common challenges to making analytics work in your organization, or in the area you oversee? ",
    options: [
      "There is no clearly defined policies, roles or processes for data governance.",
      "Data governance policies and practices are implemented in silos and are reactive in nature.",
      "Data governance policies, roles and processes have taken shape and are coordinated across multiple departments.",
      "Data governance policies, roles and processes are implemented enterprise-wide with a clear mandate, executive level visibility, accountability and oversight. ",
    ],
  },
];

export default function VerticalLinearStepper(props) {
  const [add, setAdd] = useState(10);
  const [selectedButton, setSelectedButton] = useState();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isToggled, setIsToggled] = useState(1);
  const Navigtion = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setAdd(add + 10);
    props.name(add);
    setIsToggled(isToggled + 1);
    props.number(isToggled);

    console.log(isToggled);
  };
  const handlelast = () => {
    Navigtion("/ThankYou");
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setAdd(add - 10);
  };

  const handleReset = () => {
    setActiveStep(0);
    props.number(isToggled * 0);
    props.name(add * 0);
  };

  return (
    <Box className="textcen" sx={{ maxWidth: 1000 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.question}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.question}
            </StepLabel>
            <StepContent>
              {step.options.map((items, index) => (
                <label
                  key={index}
                  className={`${(selectedButton === items && "cardstyle") ||
                    "cardstyle1"}`}
                >
                  <input type="radio" name="buttons" value={items} checked="" />
                  {items}
                </label>
              ))}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
          <Link>
            <Button onClick={handlelast} sx={{ mt: 1, mr: 1 }}>
              Continue
            </Button>
          </Link>
        </Paper>
      )}
    </Box>
  );
}
