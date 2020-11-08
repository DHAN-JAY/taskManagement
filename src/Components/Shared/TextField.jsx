import React from "react";
import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";

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
