import React from "react";
import "./Input.css";
export interface InputPROPS {
    xl?: boolean;
    label: string;
    placeholder: string;
}
declare const Input: ({ xl, label, placeholder, ...props }: InputPROPS) => React.JSX.Element;
export default Input;
