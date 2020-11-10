import React, { useEffect, useState } from "react";
import TextField from "../Shared/TextField";
import Selector from "../Shared/Selector";
import '../SignUp/sigin.styles.css'
import API from "../../AppConfig/Api";
import { API_CONSTANT } from "../../AppConfig/APIConstants";
import { useDispatch } from "react-redux";
import toaster from "../../AppConfig/MessageToaster/actions";

/**
 * This Component is used to show the forms to admin for edit and create.
 @returns {*}
 @typedef Values(object) values object used to intialize form and save value for forms
 @typedef SetValues(function) function to change values inside the values attribute
 @param {{
    values Values,
    setValues SetValues,
    edit Boolean
 }} props
*/

const ProjectForm = ({
    initialData,
    getValuesGetFunction,
    edit
}) => {
  const [values, setValues] = useState(edit ? {
      projectName: initialData && initialData.name,
      description: initialData && initialData.description,
      assignedManager: 0
  } :
    {
    projectName: "",
    description: "",
    assignedManager: 0
  });
  const [managers, setManagers] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    if(getValuesGetFunction){
      getValuesGetFunction(() => {
        return values
      })
    }
  }, [getValuesGetFunction, values])

  useEffect(() => {
    if(!edit){
      API.get(API_CONSTANT.getAllManagers)
        .then(result => {
          if(result && result.length){
            setManagers(result.map(manager => {
              return {
                value: Number(manager.id),
                label: manager.userName
              }
            }))
          }
        })
        .catch(error => {
          dispatch(toaster.error(error.message))
        })
    }
  },[edit, dispatch])

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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
           {Boolean(!edit) && <Selector
              label="Assign Manager"
              onChange={handleChange("assignedManager")}
              dataProvider={managers}
              width='100%'
              value={values.assignedManager}
            />}
          </div>
          </div>
  );
};

export default ProjectForm;
