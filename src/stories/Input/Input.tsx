import React from "react";
import "./input.css";

type TInputType = "text" | "number";

export interface InputProps {
  /**
   * Label of checkbox
   */
  label?: string;
  /**
   * Label of checkbox
   */
  type?: TInputType;
}

export const Input: React.FC<InputProps> = ({ label = "", type = "text" }) => {
  const id = (new Date().getTime() + 0.1).toString(16);

  return (
    <label htmlFor={id} className="tw-input-wrapper">
      {label ? <span className="tw-input-label">{label}</span> : null}
      <input id={id} type={type} className="tw-input" />
    </label>
  );
};
