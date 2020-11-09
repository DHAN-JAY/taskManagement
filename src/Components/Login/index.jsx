import React, { useState } from "react";
import "./login.style.css";
import { Button, IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import TextField from "../Shared/TextField";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import toaster from "../../AppConfig/MessageToaster/actions";
import API from '../../AppConfig/Api'
import { API_CONSTANT } from "../../AppConfig/APIConstants";

/**
 * Used to login into the application as Amin, Manager and Developer.
 @returns {*}
 @param {{
 }} props
*/

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    userName: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRouteSignUp = () => {
    history.push("/sign-up");
  };

  const handleOnSignIn = () => {
    if (!values.userName) {
      dispatch(toaster.error("Please Enter User Name"));
      return;
    }
    if (!values.password) {
      dispatch(toaster.error("Please Enter Password to proceed"));
      return;
    }

    API.post(API_CONSTANT.login,{
        email: values.userName,
        password: values.password
    }).then(result => {
        localStorage.setItem('user_details', JSON.stringify({
            token: result.accessToken,
            id: '12345',
            ...result,
            role: result.role.toString().toLowerCase(),
        }))
        history.push('/')
    })
    .catch(error => {
        console.log(error)
    })
  };

  return (
    <div className="loginContainer">
      <div className="loginInnerContainer">
        <div className="loginHeader">
          <span className="loginText">LOGIN</span>
        </div>
        <div className="loginBody">
          <p className="loginHeaderText">
            Login to Task Management System as Admin, Manager or Developer to
            manage multiple projects and task within project.
          </p>
          <section className="loginFieldSection">
            <TextField
              label="User Name"
              value={values.userName}
              onChange={handleChange("userName")}
            />
            <TextField
              label="Password"
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
          </section>
          <Button
            variant="contained"
            color="primary"
            className="signInButton"
            onClick={handleOnSignIn}
          >
            Sign In
          </Button>
          <small className="loginNotRegistered">
            Not Registered?{" "}
            <p className="anchor" onClick={handleRouteSignUp}>
              Sign Up
            </p>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
