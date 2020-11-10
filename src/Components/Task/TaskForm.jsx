
import React, { useState, useEffect } from "react";
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

const TaskForm = ({ getValuesGetFunction }) => {
  const [values, setValues] = useState({
    taskName: "",
    description: "",
    assignedDeveloper: 0,
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

  useEffect(() => {
    if (getValuesGetFunction) {
      getValuesGetFunction(() => {
        return values;
      });
    }
  }, [getValuesGetFunction, values]);

  return (
    <div className="signUpBody">
      <div>
        <TextField
          label="Name"
          value={values.taskName}
          onChange={handleChange("taskName")}
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
