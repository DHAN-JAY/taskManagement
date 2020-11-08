import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";

const Selector = ({
  label,
  onChange,
  value,
  dataProvider,
  margin,
  width,
  minWidth = "120",
}) => {
  return (
    <FormControl
      variant="outlined"
      style={{ margin: margin, minWidth: minWidth, marginTop: 10, width: width }}
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
