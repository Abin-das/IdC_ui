import React from "react";
import "../Page4/Thankyoupage.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
const Thankyoupage = () => {
  return (
    <div>
      <Grid container>
        <Grid className="image-left" xs={12} md={6}>
          <img
            className="thanku_img"
            src={require("../../Picture/image 2.png")}
          />
        </Grid>

        <Grid className="Center " xs={12} md={6}>
          <div className="width">
            <h4 className="thank-text"> Thank for Your</h4>
            <h3 className="part">Participation</h3>
            <h6 className="subtext-2">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature
            </h6>
          </div>
          <Card sx={{ minWidth: 100 }} className="FinalCard">
            <CardContent>
              <div className>
                <img
                  className="nav_img_1"
                  alt=""
                  src={require("../../Picture/finalpage.png")}
                />
                <h5 className="stage">Stage 3</h5>
                <h3 className="Expert">Expert</h3>
                <h4 className="download">Download Your Detail report here</h4>
              </div>
            </CardContent>
            <div>
              <CardActions className="button">
                <Button className="btn" variant="contained" size="small">
                  Download
                </Button>
              </CardActions>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Thankyoupage;
