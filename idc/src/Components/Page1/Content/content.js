import React from "react";
import "../Content/content.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const content = () => {
  return (
    <div className="grid">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h4 className="text">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethic
          </h4>
          <h4 className="text">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem
          </h4>
        </Grid>
        <Grid item xs={12} md={3} className="side">
          <Card sx={{ minWidth: 100 }} className="gridd">
            <CardContent>
              <div className="cardd">
                <h3 className="areyou">
                  ARE YOU READY FOR <h3 className="auto">Automation ?</h3>
                </h3>
                <img
                  className="nav_img_1"
                  alt=""
                  src={require("../../../Picture/Reviews 1.png")}
                />
                <h5 className="takejust">
                  Take just 2 minutes to complete this assessment and receive
                  your custmized rport and position
                </h5>
              </div>
            </CardContent>
            <div className="subtextt">
              <h3 className="start">Start Now!</h3>
              <h5 className="terms">Terms and Conditions apply</h5>
              <CardActions className="button">
                <Link to={"/SecondPage"}>
                  <Button className="btn" variant="contained" size="small">
                    Take the Assesment
                  </Button>
                </Link>
              </CardActions>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default content;
