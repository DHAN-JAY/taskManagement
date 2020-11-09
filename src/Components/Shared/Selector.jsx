import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";

/**
 * Used to show select component.
 * It also triggers onChange event.
 @returns {*}
 @typedef DataProvider(array) This the used to pass a array of object to the selection options
 @typedef ChangeFunction(function) This is the function which is being triggered on detection of change event
 @typedef Label(string) This a string to show onthe select component for user to understand
 @typedef Value(string) This is the value which is currently selected from select component
 @param {{
  dataProvider DataProvider,
  onChange ChangeFunction,
  label Label,
  value Value,
  margin string,
  width string,
  minWidth string,
  marginTop Number,
}} props
*/

const Selector = ({
  label,
  onChange,
  value,
  dataProvider,
  margin,
  width,
  minWidth = "120",
  marginTop = 10
}) => {
  return (
    <FormControl
      variant="outlined"
      style={{ margin: margin, minWidth: minWidth, marginTop: marginTop, width: width }}
    >
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        labelId={`demo-simple-select-outlined-${label}`}
        id={`demo-simple-select-outlined-${label}`}
        value={value}
        onChange={onChange}
        label={label}
      >
        {dataProvider.map((data) => (
          <MenuItem value={data.value}>{data.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Selector;
