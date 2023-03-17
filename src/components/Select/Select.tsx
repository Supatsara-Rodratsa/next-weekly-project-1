"use client";
import { forwardRef, useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import clsx from "clsx";

type SelectProps = {
  id: string;
  options: string[];
  defaultValue?: string;
  placeholder?: string;
  onSelectedValue(value: string): void;
};

const SelectOption = (
  { options, defaultValue = "", id, onSelectedValue, placeholder }: SelectProps,
  ref: any
) => {
  const [currentValue, setCurrentValue] = useState(defaultValue);

  const renderOption = (item: string, i: number) => {
    return (
      <MenuItem key={i} value={item}>
        {item}
      </MenuItem>
    );
  };

  const onChangeValue = (val: string) => {
    setCurrentValue(val);
    onSelectedValue(val);
  };

  return (
    <div>
      <FormControl>
        <Select
          sx={{
            ".Mui-focused": {
              outline: "none",
            },
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            ".MuiPaper-root": {
              marginTop: "10px",
            },
          }}
          className={clsx("bg-white w-[400px] outline-none")}
          fullWidth
          ref={ref}
          id={id}
          value={currentValue}
          onChange={(event) => onChangeValue(event.target.value)}
          variant="outlined"
          displayEmpty
          placeholder="Select an option"
        >
          <MenuItem value="" disabled>
            <em>{placeholder || "Please Select..."}</em>
          </MenuItem>
          {options && options.map((item, i) => renderOption(item, i))}
        </Select>
      </FormControl>
    </div>
  );
};
export default forwardRef(SelectOption);
