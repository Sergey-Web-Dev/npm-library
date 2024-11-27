import React from "react";
import "./Button.css";
export interface ButtonPROPS {
    color: string;
    xl?: boolean;
    children?: React.ReactNode;
}
declare const Button: ({ children, xl, color, ...props }: ButtonPROPS) => React.JSX.Element;
export default Button;
