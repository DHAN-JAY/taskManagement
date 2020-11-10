import React, { useEffect, useState } from "react";
import TextField from "../Shared/TextField";
import Selector from "../Shared/Selector";
import "../SignUp/sigin.styles.css";
import API from "../../AppConfig/Api";
import { API_CONSTANT } from "../../AppConfig/APIConstants";
import { useDispatch } from "react-redux";
import toaster from "../../AppConfig/MessageToaster/actions";

/**
 * Used to show the basic SignUp of the app.
 @returns {*} 
 @param {{
 }} props
*/

const TaskForm = () => {
  const [values, setValues] = useState({
    projectName: "",
    description: "",
    assignedManager: 0,
  });
  const [developers, setDevelopers] = useState([])
  const dispatch = useDispatch()

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    API.get(API_CONSTANT.getAllDevelopers)
      .then(result => {
        if(result && result.length)
          setDevelopers(result.map(developer => {
            return {
              value: Number(developer.id),
              label: developer.userName
            }
          }))
      })
      .catch(error => {
        dispatch(toaster.error(error.message))
      })
  },[dispatch])

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
          dataProvider={developers}
          width="100%"
          value={values.assignedDeveloper}
        />
      </div>
    </div>
  );
};

export default TaskForm;
