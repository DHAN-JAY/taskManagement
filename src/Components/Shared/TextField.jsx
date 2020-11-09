import React from "react";
import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";

/**
 * Used to show a Text Input and used to take input from the user as a string.
 * It also triggers the onChange event.
 @returns {*}
 @typedef ChangeFunction(function) This is the function which is being triggered on detection of change event
 @typedef Label(string) This a string to show on the TextField component for user to understand
 @typedef Value(string) This is the value which is currently entered in TextField component
 @typedef Rest(object) This is the props which is used to pass onto child Input components but currently not known
 @param {{
    onChange ChangeFunction,
    label Label,
    value Value,
    margin string,
    rest Rest
  }} props
*/

const TextField = ({ label, value, onChange, margin, ...rest }) => {
  return (
    <FormControl variant="outlined" fullWidth={true} style={{ margin: margin }}>
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id={`outlined-adornment-${label}`}
        value={value}
        onChange={onChange}
        label={label}
        {...rest}
      />
    </FormControl>
  );
};

export default TextField;
