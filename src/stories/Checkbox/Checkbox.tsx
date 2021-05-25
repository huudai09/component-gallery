import React from "react";
import "./checkbox.css";

export interface CheckboxProps {
  /**
   * Spinner's color
   */
  color?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ color = "#eaeaea" }) => {
  return (
    <div>
      <input type="checkbox" />
    </div>
  );
};
