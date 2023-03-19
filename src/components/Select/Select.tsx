"use client";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import clsx from "clsx";
import { forwardRef, useState } from "react";

type SelectProps = {
  id: string;
  options: string[];
  defaultValue?: string;
  placeholder?: string;
  onSelectedValue(value: string): void;
};

const SelectOption = (
  { options, defaultValue = "", id, onSelectedValue, placeholder }: SelectProps,
  ref: React.RefObject<HTMLInputElement>
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
            ".MuiPopover-paper": {
              borderRadius: "30px",
            },
            ".MuiSvgIcon-root ": {
              fill: "white !important",
            },
            ".MuiSelect-select": {
              padding: "8px",
            },
            "&.MuiPaper-root": {
              borderRadius: "30px",
            },
          }}
          className={clsx(
            "bg-black text-white w-[200px] outline-none rounded-[30px] border-white border"
          )}
          fullWidth
          ref={ref}
          id={id}
          value={currentValue}
          onChange={(event) => onChangeValue(event.target.value)}
          variant="outlined"
          displayEmpty
          placeholder="Select an option"
        >
          <MenuItem className="rounded-[30px]" value="" disabled>
            <em>{placeholder || "Please Select..."}</em>
          </MenuItem>
          {options && options.map((item, i) => renderOption(item, i))}
        </Select>
      </FormControl>
    </div>
  );
};
export default forwardRef(SelectOption);
