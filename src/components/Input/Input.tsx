"use client";
import { useState } from "react";

import { ICON } from "@src/constants/constants";

import Icon from "../Icon";

type InputProps = {
  placeholder?: string;
  onChangeValue(value: string): void;
};

const Input = ({ placeholder, onChangeValue }: InputProps) => {
  const [currentValue, setCurrentValue] = useState<string>("");

  const onChange = (typingValue: string) => {
    setCurrentValue(typingValue);
    onChangeValue(typingValue);
  };

  return (
    <div className="relative w-[350px] tablet:w-[250px] mobile:w-[100px]">
      <input
        placeholder={placeholder || "Search.."}
        value={currentValue}
        onChange={(event) => onChange(event.target.value)}
        className="w-full px-5 py-2 rounded-[30px] bg-opacity-white text-white focus:outline-white"
      />
      <div className="absolute top-2 right-4">
        <Icon type={ICON.SEARCH} color="white" />
      </div>
    </div>
  );
};

export default Input;
