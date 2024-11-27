import React from "react";
import "./Input.css";

export interface InputPROPS {
  xl?: boolean;
  label: string;
  placeholder: string;
}

const Input = ({ xl, label, placeholder, ...props }: InputPROPS) => {
  const rootClsx = ["input"];
  if (xl) rootClsx.push("xl");

  return (
    <label>
      {label}
      <input
        placeholder={placeholder}
        {...props}
        className={rootClsx.join(" ")}
      />
    </label>
  );
};

export default Input;
