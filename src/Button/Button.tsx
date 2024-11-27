import React from "react";
import "./Button.css";

export interface ButtonPROPS {
  color: string;
  xl?: boolean;
  children?: React.ReactNode;
}

const Button = ({ children, xl, color, ...props }: ButtonPROPS) => {
  const rootClsx = ["btn"];
  if (xl) rootClsx.push("xl");

  return (
    <button className={rootClsx.join(" ")} {...props} style={{ color }}>
      {children}
    </button>
  );
};

export default Button;
