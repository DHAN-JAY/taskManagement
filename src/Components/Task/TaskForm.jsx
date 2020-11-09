import { IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";
import TextField from "../Shared/TextField";
import { useHistory } from "react-router-dom";
import Selector from "../Shared/Selector";
import { Roles } from "../../AppConfig/constants";
import toaster from "../../AppConfig/MessageToaster/actions";
import { useDispatch } from "react-redux";
import API from "../../AppConfig/Api";
import { API_CONSTANT } from "../../AppConfig/APIConstants";
import '../SignUp/sigin.styles.css'

/**
 * Used to show the basic SignUp of the app.
 @returns {*}
 @typedef Heading(string) value to be shown as a header in dialog 
 @param {{
    heading Heading
 }} props
*/

const TaskForm = ({
  values,
  setValues
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

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

//   const handleRouteSignIn = () => {
//     history.push("/login");
//   };

//   const handleOnSignUp = () => {
//     if (!values.userName) {
//         dispatch(toaster.error("Please enter User Name"));
//         return;
//       }
//       if (!values.email) {
//         dispatch(toaster.error("Please enter email"));
//         return;
//       }
//       if (!values.role) {
//         dispatch(toaster.error("Please select a role"));
//         return;
//       }
//       if (!values.password) {
//         dispatch(toaster.error("Please enter password"));
//         return;
//       }
//       if (!values.confirmPassword) {
//         dispatch(toaster.error("Please enter confirmPassword"));
//         return;
//       }
//       if(values.confirmPassword !== values.password){
//         dispatch(toaster.error("password and confirm passwords are not same"));
//         return;
//       }
//       API.post(API_CONSTANT.signUp, {
//         "username": values.userName,
//         "role": values.role,
//         "email": values.email,
//         "password": values.password
//       }).then(() => {
//           dispatch(toaster.success('Account is successfully created. Please Login.'))
//           history.push('/login')
//       })
//       .catch(error => {
//           console.log(error)
//       })
//   }

  return (
        <div className="signUpBody">
          <div>
            <TextField
              label="Name"
              value={values.projectName}
              onChange={handleChange("projectName")}
            />
            <TextField
              label="Deascription"
              margin="10px 0px 0px 0px"
              multiline
              value={values.description}
              onChange={handleChange("description")}
            />
            <Selector
              label="Assign Developer"
              onChange={handleChange("assignedDeveloper")}
              dataProvider={Roles}
              width='100%'
              value={values.assignedDeveloper}
            />
          </div>
          </div>
  );
};

export default TaskForm;
