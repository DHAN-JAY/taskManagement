import { Button, IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";
import TextField from "../Shared/TextField";
import "./sigin.styles.css";
import { useHistory } from "react-router-dom";
import Selector from "../Shared/Selector";
import { Roles } from "../../AppConfig/constants";
import toaster from "../../AppConfig/MessageToaster/actions";
import { useDispatch } from "react-redux";
import API from "../../AppConfig/Api";
import { API_CONSTANT } from "../../AppConfig/APIConstants";
import { validateEmail } from "../../Utils/helpers";

/**
 * Used to show the basic SignUp of the app.
 @returns {*}
 @typedef Heading(string) value to be shown as a header in dialog 
 @param {{
    heading Heading
 }} props
*/

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [values, setValues] = useState({
    userName: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRouteSignIn = () => {
    history.push("/login");
  };

  const handleOnSignUp = () => {
    if (!values.userName) {
      dispatch(toaster.error("Please enter User Name"));
      return;
    }
    if (!values.email) {
      dispatch(toaster.error("Please enter email"));
      return;
    }
    if (!values.role) {
      dispatch(toaster.error("Please select a role"));
      return;
    }
    if (!values.password) {
      dispatch(toaster.error("Please enter password"));
      return;
    }
    if (!values.confirmPassword) {
      dispatch(toaster.error("Please enter confirmPassword"));
      return;
    }
    if (values.confirmPassword !== values.password) {
      dispatch(toaster.error("password and confirm passwords are not same"));
      return;
    }
    if (validateEmail(values.email).isError) {
      dispatch(toaster.error(validateEmail(values.email).errorMessage));
      return;
    }
    API.post(API_CONSTANT.signUp, {
      username: values.userName,
      role: values.role,
      email: values.email,
      password: values.password,
    })
      .then(() => {
        dispatch(
          toaster.success("Account is successfully created. Please Login.")
        );
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signUpContainer">
      <div className="signUpInnerContainer">
        <div className="signUpHeader">
          <span className="signUpText">SIGN UP</span>
        </div>
        <div className="signUpBody">
          <div>
            <TextField
              label="User Name"
              value={values.userName}
              onChange={handleChange("userName")}
            />
            <TextField
              label="Email"
              margin="10px 0px 0px 0px"
              error={validateEmail(values.email).isError}
              value={values.email}
              onChange={handleChange("email")}
            />
            <Selector
              label="Role"
              onChange={handleChange("role")}
              dataProvider={Roles}
              width="100%"
              value={values.role}
            />
            <TextField
              label="Password"
              margin="10px 0px 0px 0px"
              value={values.password}
              onChange={handleChange("password")}
              type={values.showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <TextField
              label="Confirm Password"
              margin="10px 0px 0px 0px"
              value={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
              type={values.showConfirmPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showConfirmPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className="signUpButton">
            <Button
              variant="contained"
              color="primary"
              className="signUpButton"
              onClick={handleOnSignUp}
            >
              Sign Up
            </Button>
          </div>
          <small className="signUpRegistered">
            Registered?
            <p className="anchor" onClick={handleRouteSignIn}>
              Sign In
            </p>
          </small>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
