import { Checkbox, FormControlLabel } from "@mui/material";
import * as React from "react";

import { COLORS } from "@src/constants/constants";

type MovieCheckBoxProps = {
  currentValue: boolean;
  onChangeValue(name: string, value: boolean): void;
  label: string;
};

const MovieCheckBox = ({
  currentValue,
  onChangeValue,
  label,
}: MovieCheckBoxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValue(event.target.name, event.target.checked);
  };
  return (
    <FormControlLabel
      control={
        <Checkbox checked={currentValue} onChange={handleChange} name={label} />
      }
      sx={{
        ".Mui-checked": {
          color: COLORS.RED + "!important",
        },
      }}
      label={label}
    />
  );
};

export default MovieCheckBox;
