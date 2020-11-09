import React from "react";
import TextField from "../Shared/TextField";
import Selector from "../Shared/Selector";
import { Roles } from "../../AppConfig/constants";
import '../SignUp/sigin.styles.css'

/**
 * Used to show the basic SignUp of the app.
 @returns {*}
 @typedef Heading(string) value to be shown as a header in dialog 
 @param {{
    heading Heading
 }} props
*/

const ProjectForm = ({
    values,
    setValues,
    edit
}) => {

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
              dataProvider={Roles}
              width='100%'
              value={values.assignedManager}
            />}
          </div>
          </div>
  );
};

export default ProjectForm;
