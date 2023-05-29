import React from "react";
import "../Page2/registernow.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

// import Input from "../Page2/input";

const schema = yup.object({
  username: yup.string().required("User Name isRequired"),
  lastname: yup.string().required("last Name isRequired"),
  email: yup
    .string()
    .email("Type a Valid Email")
    .required("Email Id isRequired"),
  OrganisationName: yup.string().required("Organisation Name isRequired"),
});

const Registernow = () => {
  const Navigtion = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  const formSubmit = (data) => {
    Navigtion("/ThirdPage");
  };

  return (
    <div className="flott">
      <div className="box">
        <h3 className="regnow">Register Now</h3>
        <h5 className="regnow_sub">
          Contrary to popular belief, Lorem Ipsum is not simply random text
        </h5>
        <Grid container>
          <Grid xs={12} md={6}>
            <TextField
              label="User name"
              placeholder="Enter First name"
              {...register("username")}
              className="textinput"
            />

            {errors.username && (
              <p className="error">{errors.username.message}</p>
            )}
          </Grid>
          <Grid xs={12} md={6}>
            {" "}
            <TextField
              label="Last name"
              placeholder="Enter Last name"
              {...register("lastname")}
              className="textinput"
            />
            {errors.lastname && (
              <p className="error">{errors.lastname.message}</p>
            )}
          </Grid>

          <Grid xs={12} md={6}>
            <TextField
              label="Email"
              placeholder="Enter Email"
              {...register("email")}
              className="textinput"
            />

            {errors.email && <p className="error">{errors.email.message}</p>}
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              label="Organisation Name"
              placeholder="Organisation Name"
              {...register("OrganisationName")}
              className="textinput"
            />

            {errors.OrganisationName && (
              <p className="error">{errors.OrganisationName.message}</p>
            )}
          </Grid>
          <Grid xs={12} md={6}>
            <select className="textidropdown" id="lang">
              <option className="drop-down">Job title</option>
              <option className="drop-down">Job t</option>
              <option className="drop-down">Job tle</option>
              <option className="drop-down">Job t3</option>
            </select>
          </Grid>
          <Grid xs={12} md={6}>
            <select className="textidropdown" id="lang">
              <option>Job Function</option>
            </select>
          </Grid>
          <Grid xs={12} md={6}>
            <select className="textidropdown" id="lang">
              <option>Country</option>
            </select>
          </Grid>
          <Grid xs={12} md={6}>
            <select className="textidropdown" id="lang">
              <option>Number of Employees</option>
            </select>
          </Grid>
          <Grid xs={12} md={6}>
            <select className="textidropdown" id="lang">
              <option>Industry</option>
            </select>
          </Grid>
          <Grid xs={12} md={6}>
            <select className="textidropdown" id="lang">
              <option>Company Type </option>
            </select>
          </Grid>
        </Grid>

        <Button
          onClick={handleSubmit(formSubmit)}
          className="butonss"
          variant="contained "
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Registernow;
